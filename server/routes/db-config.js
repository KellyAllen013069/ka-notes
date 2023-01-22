const sql = require('mysql');
console.log("creating connection " + process.env.DB_PASS + " " + process.env.DB_HOST + " " + process.env.DB_USER + " " + process.env.DATABASE);
const db = sql.createConnection({host: process.env.DB_HOST, password: process.env.DB_PASS, database: process.env.DATABASE, user: process.env.DB_USER})
module.exports = db
