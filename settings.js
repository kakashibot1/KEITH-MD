/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVmAZRECI6YpCLiiIX727MQwkFliBgVSHghP++gd09PQ+7s708FVkVmSfPOZk/QZZjimaoAcpPUBB8gwy1R9YUCChgVEYRIqALQsggUIBjHNbm5XCIC+3mXgWZjutbjy4jfDoezvst6cWomi30gN8MX8GjC4rymOLgTwlXjukPBGFwUZeZZu0b+3Qil1XgGsuO1jHCU9U7JhFZHtL4FTzajBATnMVGcUIXRGA6Q40LMfka/HxhhGibVofbzqpzCbqCoUZIFmSKdzatOoK3Dhd37gr56dfgdzRXPWtmXaciNY4iKibGJCkXjbmTaiLWazggaLqDdsO/w6c4zlA4DVHGMGu+zHs8S/wr60valpF+qWVe6vO2nt4DNorO9qKhxyVLLTpe88nXgM+SarafB9Y2Lc6TQsjPDDXzK7QbUY9l7uU0xluRU2Wyuax/B+6SD68k/4f36dSe+vGs31ubJB/7L1Fvmh7qjO50KVC9l8OSLPMIVwd1Y3wNfj05X4N9MeEmHRg4DuM6KxKMEnTIkXUvfUHQm/rMNEHj7E/4kJXkTyi9JhnEZz6Ur7Klb93eMskJ9arIDIMqifhIx35zv4+Ogpvug8kVenywMlkuiovO2r4e/M0u0I7wvPH9jEOxE/mpW2H19dlRgpppCBT+0QUExZgyAhnOszbW47kugOFtiQKC2JNeMHTLhlOTm3dfDEbWHbl6Ot3s7NzU3LUquVaw0/d7SV+OvPgVdEFB8gBRisIJpiwnjY0ohTGiQPnrRxdkqGZvwrXlhF4XRJhQts7KIs1h+KHqxyUMgrzM2LLJAq09IAIU7jOMGMNZTFseywyS4IRvSDtBRoESwZSiXx0igkKgMFKiX1Or5WFLvGPtLN3iNdAFl6cgOAQK6PUFedgTZUka9BT+O/1WtVlhUXzLEANdkD5fDQcSJ0o9URK5/nCo8N/bcBdksM0EQng75gwWRcv5O+K2QIgYxCkFCtDcqyjknmbY2jmm1XisGrGqxSr47PDDKm9SzCeSYDnhwYw4FOp7x63wOD0i6XZydvF13ewy6q2bCRJXxus/JAEKcI/XIBoI/ZdzUkajfuLGQbVlsj9c3cfC5GTt7xa0eusjJ3lOmg+GJmucGTL9WzmqXxxb30XVVE2M+zDorLNbJfNJo6mtr7ogRDccoN+LZckuCWAiu0NzsHRWyeYKeSJw4s1YzAfy9cWkWjLOV3BmDbKsCn1LJN5QTzjeulHeq/FRq0f7mXmd+HPOGc+Ho9RNcPVm4ucQpe/LCz/t1WrX/kYYPXfBuw7/peUb7tZx3KP7W4r35fIvAzpa1h25WWVbfydPMq+nn4fTU7EVSqm/Svuz1E4HkmHaJ6FMavB4/OiCIoUsyskFKABmIcmfXiF52Vp4mkX5H4ppKjcdebHWNp5CytTPsVjhC6IMXgqg8JLEcYIgcvLbK5fkxQTSE1CAELtrK2k93qhFsWSQfUwZUNtPm2fg8Td4mWd/gQcAAA==';

const dev = process.env.OWNER_NUMBER || '243800182016';

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
