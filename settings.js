/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9lY161ZgWkGtERwwqKIqKoq32xj4UUEDJ1aoCxAn/fQO7e3oedmd7eSqyKjJPnnMyf4C8wBQtUAu0H6AkuIYMdUfWlghoYFSFISKgDwLIINDAYCnSPdfQHhKvub6g3nponOLeTV8Iyetr72VOR/WNBMr62DyDex+UlZdi/zcJF6Pji9KY6TRbH0T/Yguv4tXzrGuIRGlybvQjxMIiPWHbtZ7BvcsIMcF5ZJQxyhCB6QK1DsTka/CbOdezdcu2ZXJJM0TbnbrIrUUVSULMSceJsx+a0xrVTbr5GnyzOl7CaCleTrFeYyr46mF2cB1aewdBGFXGzfCipcBKOVXe4FMc5SiwApQzzNov875c+PBM5JkI162zFs10vY5hqW7VZZwfPPHplNCSCzcKyaKvAc9NVsLg6pSDK5sNhmbDxTiTr9vV8CBtyPjV4CLfhkVzNaJfgTvkwyvJ/+F9vdoTGeeZwHJ5l+BpuXbLWWHFQoWPzFRNVS6k9SUtby/Lr8Gfny5nru4ZBSOWFTk7d3N0dDeb6o48c6tCdHtyE9ZPcRwln/Ahq8jvUO7ZzhGEW1OZSm7bO88/D2piwUVirfRSHSulQLeZNZ9MJqvzFVtx7wBNdT+/kAE3GE/bMV3IPJ818nauwN4Q9iYXnOjR86OjBLVWADTu3gcERZgyAhku8i6mCH0Ag9pFPkHswS5Y4sKLWp5Hvi1td9ak1t1Xsc03nCINlWRlGfN9aMyVhTXTn0EflKTwEaUomGHKCtIuEaUwQhRof/7VBzm6sjfdumoC1wchJpTt86pMCxh8iPpxCX2/qHLmtrk/7g6IAG3wGUaM4TyiHY1VDokf4xqNY8go0EKYUvSzQURQADRGKvRzaMdF0PG+5Q+OY4550AfZQw8cAA3wQ0FVeEmVZZHXuO/0W9NlhWX5LUcM9EH6eKWI8kCSeUmWBkNF0bjvXbgPcthlAgGsvYL9Acuy4/wdclchQAzilAINjK0JkqRiaqyIoih0OtWNSB9HOvhs8cMqb1pcLuZ8FlXnZRPbk3VVbIasatm1duCJ8KmzNOXG8Oig2t6S539IAjRwVHvb03a+yVGDn4yhnA/EMK8z2RZPI1WQV5dpGp2OI8kP+e1chsPZZAWTq+E+LU/DV96evMxxVE/SRi52fGSPM1fystHmuasWoBr76Ndi0muxSQT0dF3LL+pthWivDB0sv/hMNkfkNDWX3mQXqdenVD9nTulfo/hQTCVH2c9NvxDxTSjb2eUwdVIuOQ/idWaV58nmzcSPIUrflxd++KsTr/sNMXrsgnch/kvMN9yd5Qb3/i8p3pfLvwzoCF5idzu0i9vScpsbuRhr26PE9258tlDL3W2ElNFUXtmJL4L7/a8+KFPIwoJkQAMwD0jxMAspqs7DVh4Wvyk21gfWaBONu8ZTSJn+ORc7nCHKYFYCjZMlVVZVXlLfXjmkKGeQxkADQuTs50ln8lYvS5dB9jFmQO8+c++D+9+B5R8YgQcAAA==';
const dev = process.env.OWNER_NUMBER || '243846064543';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
