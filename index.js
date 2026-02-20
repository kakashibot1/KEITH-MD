const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const pino = require('pino');
const fs = require('fs-extra');
const path = require('path');
const express = require('express');
require('dotenv').config();

const { database, session, dev } = require('./settings');
const { initSettingsDB } = require('./database/settings');

const logger = pino({ level: 'error' });
const app = express();

let sock;
let isConnected = false;

async function startBot() {
  try {
    console.log('🤖 Starting KEITH-MD Bot...');
    
    // Initialize database
    await initSettingsDB();
    console.log('✅ Database initialized');

    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version } = await fetchLatestBaileysVersion();

    sock = makeWASocket({
      version,
      logger,
      printQRInTerminal: true,
      auth: state,
      browser: ['KEITH-MD', 'Safari', '1.0.0'],
      syncFullHistory: false,
    });

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        console.log('📱 Scan QR Code Above');
      }

      if (connection === 'connecting') {
        console.log('⏳ Connecting...');
      }

      if (connection === 'open') {
        isConnected = true;
        console.log('✅ Bot Connected Successfully!');
        console.log('👤 Bot ID:', sock.user?.id);
      }

      if (connection === 'close') {
        isConnected = false;
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        console.log('❌ Connection Closed. Reconnecting:', shouldReconnect);
        if (shouldReconnect) {
          startBot();
        }
      }
    });

    sock.ev.on('creds.update', saveCreds);

    // Message handling
    sock.ev.on('messages.upsert', async (m) => {
      try {
        const msg = m.messages[0];
        if (!msg.message) return;

        const isGroup = msg.key.remoteJid.endsWith('@g.us');
        const sender = msg.key.participant || msg.key.remoteJid;
        const from = msg.key.remoteJid;

        let text = msg.message.conversation || 
                   msg.message.extendedTextMessage?.text || '';

        if (!text) return;

        const args = text.split(' ');
        const command = args[0].toLowerCase();

        // Load and execute command
        const cmdPath = path.join(__dirname, 'Cmds', `${command}.js`);
        
        if (fs.existsSync(cmdPath)) {
          const cmd = require(cmdPath);
          await cmd.execute({
            sock,
            msg,
            text,
            command,
            args,
            isGroup,
            sender,
            from,
          });
        }
      } catch (error) {
        console.error('❌ Error processing message:', error);
      }
    });

  } catch (error) {
    console.error('❌ Fatal Error:', error);
    process.exit(1);
  }
}

// Express server for health checks
app.get('/health', (req, res) => {
  res.json({ status: isConnected ? 'connected' : 'disconnected' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on port ${PORT}`);
});

startBot();