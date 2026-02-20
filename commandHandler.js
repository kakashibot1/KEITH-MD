const fs = require('fs-extra');
const path = require('path');

let commands = [];

function registerCommand(config, handler) {
    if (!config.name || !handler) {
        console.error('Command name and handler are required');
        return;
    }

    const command = {
        name: config.name,
        description: config.description || 'No description',
        category: config.category || 'General',
        handler,
        timestamp: new Date(),
    };

    commands.push(command);
    console.log(`✅ Command registered: ${config.name}`);
}

async function loadCommands() {
    try {
        const cmdsDir = path.join(__dirname, 'Cmds');
        if (!fs.existsSync(cmdsDir)) {
            console.warn('⚠️ Cmds directory not found');
            return;
        }

        const files = fs.readdirSync(cmdsDir).filter(f => f.endsWith('.js'));

        for (const file of files) {
            try {
                const cmd = require(path.join(cmdsDir, file));
                if (cmd.name && cmd.handler) {
                    registerCommand({ name: cmd.name, description: cmd.description }, cmd.handler);
                }
            } catch (error) {
                console.error(`❌ Error loading command ${file}:`, error.message);
            }
        }

        console.log(`✅ Loaded ${commands.length} commands`);
    } catch (error) {
        console.error('❌ Error loading commands:', error);
    }
}

function getCommand(name) {
    return commands.find(cmd => cmd.name.toLowerCase() === name.toLowerCase());
}

function getAllCommands() {
    return commands;
}

module.exports = { registerCommand, loadCommands, getCommand, getAllCommands, commands };