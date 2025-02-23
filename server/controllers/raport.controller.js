const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const addRaport = (req, res) => {
  const { id_klienta, status, tytul, priorytet, data, godzina, tresc } =
    req.body;

  const sqlTicket = `
      INSERT INTO ticket022025 (id_klienta, status, tytul, priorytet, data, godzina) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

  const valuesTicket = [id_klienta, status, tytul, priorytet, data, godzina];

  db.query(sqlTicket, valuesTicket, (err, result) => {
    if (err) {
      console.error("Error with addRaport:", err);
      return res
        .status(500)
        .json({ success: false, message: `DB error: ${err}` });
    }

    const ticketId = result.insertId;

    const sqlMessage = `
        INSERT INTO message022025 (id_ticket, id_klienta, data, godzina, tresc) 
        VALUES (?, ?, ?, ?, ?)
      `;

    const valuesMessage = [ticketId, id_klienta, data, godzina, tresc];

    db.query(sqlMessage, valuesMessage, (err, resultMessage) => {
      if (err) {
        console.error("Error inserting message:", err);
        return res
          .status(500)
          .json({ success: false, message: `DB error: ${err}` });
      }

      res.status(200).json({
        success: true,
        message: "Raport and message added successfully",
        ticketId: ticketId,
        messageId: resultMessage.insertId,
      });
    });
  });
};

module.exports = { addRaport };
