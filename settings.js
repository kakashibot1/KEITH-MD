/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VV25KiSBD9l3rVGG5yM6IjBm1BxAuKKLoxDyUUUC03qwpsnPDfN7Cnu+dhd7aXpyKpyDx5zsnkJyhKTJGDWjD8CSqCG8hQd2RthcAQjOo4RgT0QQQZBEOweLZbLxOmemI6oWrp9fWyOZz4qroYL/H+BFVrme6MTTmRDk/g3gdVfcpw+IeEo4W8yyGS4kWwMSUqzeWLk4ph0dp7VksSdc2JQNqdl5rGE7h3GSEmuEgmVYpyRGDmoNaFmHwNPp3uY+diRiMlaE6pZbQzRXGKKCur5DXHGW42e2qz2r9O6Nfg8zdON16W6+aI19N9sTf8ixEKHufUvGuPy81FyZqQBkjZam/wKU4KFNkRKhhm7Zd5r2eulW9vaSCuryeGysI2ETdtThfkZoWIMYP1a3iQ8Gi3+BrwAr7M5eWxWSsLJzLDXZ6LA7kU6WC5PFhrIy+m7UQTJKV3m/wO3CXvXjn/H97hfL7OVwV3bPCoJ+8JJlearuKVUa6gk4SD2U2UDvU5wYH9NficV85X14ndRO3R9ITpvtW5mbqtpe22JylaYG13gmelW6O1P+FDVpM/ofTpaRURM5isDz2M7dpn1egSbuC10k0+CATdk0zH07D/zDQuiI55lUz9cpNkyTat164alJtecpjDjTtf02YZRbXaJsnTo6Mzau0IDIV7HxCUYMoIZLgsupgs9QGMGg+FBLEHu4A1L84s2ty2K+wnx4xOwp3NS/lgXhvjaeK0GXetOSc0OWw8gT6oSBkiSlE0xZSVpF0gSmGCKBj+9aMPCvTK3nTrqklCH8SYUOYXdZWVMHoX9f0jDMOyLpjXFuG4OyAChvxnGDGGi4R2NNYFJGGKGzROIaNgGMOMoo8GEUERGDJSo4+hHZdRx/t4J+nSURVAH+QPPXAEhkAcSLomKrqqyuJQ/U6/XbussKq+FYiBPsgetzRZ5RVVVFSFH2jaUP3ehe8f8LpsEWIQZ7Qr5KBLufCnk2WcKhq1LCNMjHFigM923m3xxvs1Rza/11TPl3Yb/vh8XM+d50JoNPVSkEQLhStN46Nx48fXp39IAobAsRfcMrWPqYPo+XjdHVprYISwai43QZ1VKRe7F94Me/7aYDM4aWJNTzzvkImyKEuvNIyu1oIZcjbWQ5M2Z5ZYgjq+PnXVItTgEP1eLC435UkLyDLQY9UbHF1EeqO9Mhnb7mo/sZti/zx6sUdTUs84Ld6e9qRxT6lWnG5wO/U4bKXy4dyzAhbowqlx3eokeanxZtjHwGS/FhV+eKkTqnuNMXrMfQE7+f5TuDfcnb34e/+3FL8Wyb/9GMJZgZdms+KzpeBH1lr0x20i6ydupVTKwJ0uw7kdiOuFblBwv//ogyqDLC5J3u2bIiIljkAfkLLu/GoXcfmHYmODt0frZNw1nkHKjM8Z2OIcUQbzCgwFVdEVZaDK4tstl5TVFNIUDIGUuP7s3Bm6NarKY5C9jxQwuseCB3D/G31sSgZtBwAA';
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
