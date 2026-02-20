// settings.js

// Clean configuration for the application

const config = {
    appName: 'MyApp',
    env: 'production',
    logging: {
        level: 'info', // Set log level to info
    },
    database: {
        host: 'localhost',
        port: 5432,
        name: 'my_database',
        user: 'username', // Use environment variable for the actual username
        password: 'password', // Use environment variable for the actual password
    },
    apiKeys: {
        serviceX: 'your_api_key_here', // Use environment variable for the actual API key
    }
};

module.exports = config;