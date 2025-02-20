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

module.exports = {
  login,
};
