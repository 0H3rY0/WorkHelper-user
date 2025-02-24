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

const getAllTicketsByClientId = (req, res) => {
  const { id } = req.params;

  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `ticket${month}${year}`;

  const sql = "SELECT * FROM ?? WHERE id_klienta = ?";

  db.query(sql, [tableName, id], (err, result) => {
    if (err) {
      console.log("error in getAllTicketsByClientId");
      res.status(500).json({ success: false, message: `db error: ${err}` });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Downloaded all tickets by client id success!",
      tickets: result,
      tableName: tableName,
    });
  });
};

const getAllMessageByTicketId = (req, res) => {
  const { ticketId } = req.params;

  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `message${month}${year}`;

  const sql = "SELECT * FROM ?? WHERE id_ticket = ?";

  db.query(sql, [tableName, ticketId], (err, result) => {
    if (err) {
      console.log("error in getAllMessageByTicketId");
      res.status(500).json({ success: false, message: `db error: ${err}` });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Downloaded all messages by ticket id success!",
      messages: result,
      tableName: tableName,
    });
  });
};

module.exports = {
  addRaport,
  getAllTicketsByClientId,
  getAllMessageByTicketId,
};
