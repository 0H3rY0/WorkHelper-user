const db = require("../config/db");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  const { email, haslo } = req.body;

  const sql = "SELECT * FROM uzytkownicy WHERE email = ?";
  db.query(sql, [email], async (err, data) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: "Invalid email" });
    }

    const user = data[0];

    try {
      const isPasswordValid = await bcrypt.compare(haslo, user.haslo);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Error comparing passwords:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const sql = "SELECT id, imie, nazwisko, email FROM uzytkownicy WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User found",
      user: result[0],
    });
  });
};

const getClientsByUserId = async (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT klienci.id, klienci.id_user, klienci.id_grupy, klienci.id_obiektu, klienci.stanowisko 
    FROM klienci 
    JOIN uzytkownicy ON klienci.id_user = uzytkownicy.id 
    WHERE uzytkownicy.id = ? AND klienci.dataDO IS NULL
  `;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No clients found for this user" });
    }

    res.status(200).json({
      success: true,
      message: "Clients found",
      clients: result,
    });
  });
};

const getAllObjectsWithGroupsByUserId = async (req, res) => {
  const { id } = req.params;

  const sql = `
 SELECT 
    k.id AS klient_id,
    k.stanowisko,
    k.telefon,
    o.id AS obiekt_id,
    o.nazwa AS obiekt_nazwa,
    g.id AS grupa_id,
    g.nazwa AS grupa_nazwa
FROM klienci k
JOIN obiekty o ON k.id_obiektu = o.id
JOIN grupy g ON k.id_grupy = g.id
WHERE k.id_user = ?;
`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No data found for this user" });
    }

    res.status(200).json({
      success: true,
      message: "data found",
      userData: result,
    });
  });
};

const getApproprietePerrmision = async (req, res) => {
  const { id } = req.params;

  const sql = `SELECT * FROM grupy WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }

    if (!result || result.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No data found for this user" });
    }

    res.status(200).json({
      success: true,
      message: "data found",
      permission: result,
    });
  });
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword, id } = req.body;

  console.log(currentPassword, newPassword, id);

  if (!currentPassword || !newPassword || !id) {
    return res.status(400).json({ message: "Wszystkie pola są wymagane" });
  }

  try {
    const sql = "SELECT haslo FROM uzytkownicy WHERE id = ?";
    const [user] = await new Promise((resolve, reject) => {
      db.query(sql, [id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = user.haslo;

    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      hashedPassword
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid current password" });
    }

    const saltRounds = 10;
    const newHashedPassword = await bcrypt.hash(newPassword, saltRounds);

    const updateSql = "UPDATE uzytkownicy SET haslo = ? WHERE id = ?";
    await new Promise((resolve, reject) => {
      db.query(updateSql, [newHashedPassword, id], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  login,
  getUser,
  getClientsByUserId,
  getAllObjectsWithGroupsByUserId,
  getApproprietePerrmision,
  changePassword,
};
