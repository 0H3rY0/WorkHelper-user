const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error with connect db", err.message);
    return;
  }
  console.log("✅ successfuly connect db");
  connection.release();
});

// setInterval(() => {
//   db.getConnection((err, connection) => {
//     if (err) {
//       console.error("⚠️ Ping error:", err.message);
//     } else {
//       console.log("🔄 Ping do bazy danych OK");
//       connection.ping();
//       connection.release();
//     }
//   });
// }, 60000);

module.exports = db;
