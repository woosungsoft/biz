
const mysql = require("mysql"); 
const dotenv = require('dotenv');

dotenv.config(); 

// 우성 RDS 서버
 const client = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   port:3306,
   database: process.env.DB_DATA_DATABASE,
   multipleStatements: true
 })

 setInterval(function () {
  client.query('SELECT 1');
}, 5000);

module.exports = client;
