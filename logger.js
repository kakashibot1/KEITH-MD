class Logger {
    constructor() {
        this.colors = {
            error: '\x1b[31m',   // Red
            warn: '\x1b[33m',    // Yellow
            info: '\x1b[36m',    // Cyan
            success: '\x1b[32m', // Green
            debug: '\x1b[34m',   // Blue
            reset: '\x1b[0m'     // Reset color
        };
    }

    timestamp() {
        return new Date().toISOString();
    }

    log(type, message) {
        const color = this.colors[type] || this.colors.reset;
        console.log(`${color}[${this.timestamp()}] ${type.toUpperCase()}: ${message}${this.colors.reset}`);
    }

    error(message) {
        this.log('error', message);
    }

    warn(message) {
        this.log('warn', message);
    }

    info(message) {
        this.log('info', message);
    }

    success(message) {
        this.log('success', message);
    }

    debug(message) {
        this.log('debug', message);
    }
}

module.exports = new Logger();