/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');

const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBT8l3rVGBFBwIiOGC7eEAW8ohvzUEIBJVBgUSg40f++gd09PQ+7s708FQWRJ09mnvMTkByXaIEaMPoJCopvkKH2yJoCgRHQqjBEFHRBABkEI2CrlpL2cBJNzIVXLScGXqGjQczFYX23zSwxIoMI08bue/kLeO2Cojqn2P8DIKztIYKTQ8cfnG/xbOcp2+WGWOrN7sFjka0CJGzW3CM21i1giwgxxSQaFzHKEIXpAjUOxPRr9PMZzVfS9CSJS8FdPQK1ns9q4pp6VonDmW4dbv3Ec0/HynO/Rl/P60e9n1frjagdmqZwJrPTQfH8qPaNYrBSJ9LVuzppFWflG/0SRwQF8wARhlnzZd13kzx3t3pzS/SoURf3/VY7mWQxP0N+naKiTE31MuUKamTjL+p+NceLq7jmXGoflOUpW13FTmiTCg/487SUhX0ShfkDxun8d+IO/chK8n90hzrt93pYGUNrjW/hLhYK05iSfWIlzFIiXas4pOx0pPK7r9G35Z13IeySYGVJkREZS9+YbrnTUvf2siVJ9vjR4+eKLWr5J33IKvonlvwpa8KDbUzJ2SUX4cqcO+eKeOwtzum5b/niIBMuJrNyrBwsYd106uuNH/M53mbrVRqMvfhhpR37uJ/ee73jVqCOIqj3l2dHCWrmARj1X7uAogiXjEKGc/K8UwZdAIPbBvkUsae84LAoh7Xo8RKyy2EsKzdeV9XjgDOFbeSWfnARUdqpTRgquxfQBQXNfVSWKJjhkuW0WaKyhBEqweivH11AUM3ejGvLDfpdEGJash2pijSHwYerHx+h7+cVYZuG+Hp7QBSMuM9rxBgmUdnqWBFI/RjfkB5DVoJRCNMS/eoQURSAEaMV+jW1eh60whtLZ+UOBjPQBdnTEBy08gsDReaHiiSJ/Kj/vfx2b1FhUXwjiIEuSJ9/yaLEDSV+KA05QZZH/e/tdRcQ2CKBAN7OOYNF0Wr+zrgtECAGcVq2E7t0qLQ4jsfz7TXy79OpOo5UPVLBZ4cfUXmz4nEYI4MUPWs2zhVTK0l99T1WLmm2Y4fZAPJD4ms2PC4f0cs/gIARSHSkdSy50WPTcvQDdhK3OAzlfrCTzYBa3NnJSskOd50C9abnSxiqXmflP3QOz/ryXNKsXsCLd0vT73T74JE5JXliuC9ttQDdsI9+LxbehVJii4BehJPbz3RFvq86ncv84Uw0824nRVo+HLQx05oMpot6pVXb/VU+xtl1zz2w4IqaIVuXsb2Iee+Scel+ds119y3EzyFK35cXfsar9a59DTF67oJ3H/7LyzfebeK41+5vEO/L5V8GVPP78SwSh2FT1wtn455NGZKJdDYWYmrtY4VnVTFQt1lmLAXw+vqjC4oUsjCnWbuDSEDzZ1ZoXrURnpMw/9NqV7m55kZ623gKS6Z+jsUWZ6hkMCvAqC9JHMcPeVF4+8uheTGDZQxGYBA5OzNpM96oRbFhkH1MGVDbZ1ptwevf5LU/UYEHAAA=';
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

//must run
