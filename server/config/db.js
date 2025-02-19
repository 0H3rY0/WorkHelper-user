const mysql = require("mysql2");
require("dotenv").config();

// Tworzenie puli połączeń
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Maksymalna liczba połączeń
  queueLimit: 0,
});

// Sprawdzanie połączenia
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Błąd połączenia z bazą danych:", err.message);
    return;
  }
  console.log("✅ Połączono z bazą danych MySQL");
  connection.release(); // Zwolnienie połączenia do puli
});

// Pingowanie bazy co 60 sekund, aby uniknąć zamknięcia połączenia
setInterval(() => {
  db.getConnection((err, connection) => {
    if (err) {
      console.error("⚠️ Ping error:", err.message);
    } else {
      console.log("🔄 Ping do bazy danych OK");
      connection.ping();
      connection.release();
    }
  });
}, 60000); // Co 60 sekund

// Eksportowanie `db`
module.exports = db;
