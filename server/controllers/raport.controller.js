const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const addRaport = async (req, res) => {
  try {
    const { id_klienta, status, tytul, priorytet, data, godzina, tresc } =
      req.body;

    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");

    const ticketTable = `ticket${month}${year}`;
    const messageTable = `message${month}${year}`;

    const sqlTicket = `
      INSERT INTO ${ticketTable} (id_klienta, status, tytul, priorytet, data, godzina) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valuesTicket = [id_klienta, status, tytul, priorytet, data, godzina];

    const [ticketResult] = await db.promise().query(sqlTicket, valuesTicket);
    const ticketId = ticketResult.insertId;

    const sqlMessage = `
      INSERT INTO ${messageTable} (id_ticket, id_klienta, data, godzina, tresc) 
      VALUES (?, ?, ?, ?, ?)
    `;

    const valuesMessage = [ticketId, id_klienta, data, godzina, tresc];

    const [messageResult] = await db.promise().query(sqlMessage, valuesMessage);

    res.status(200).json({
      success: true,
      message: "Raport and message added successfully",
      ticketId: ticketId,
      messageId: messageResult.insertId,
    });
  } catch (err) {
    console.error("Error in addRaport:", err);
    res
      .status(500)
      .json({ success: false, message: `DB error: ${err.message}` });
  }
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

const sendMessage = (req, res) => {
  const { id_ticket, id_klienta, tresc, data, godzina } = req.body;

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  // const date = today.toISOString().split("T")[0]; // YYYY-MM-DD
  // const time = today.toTimeString().split(" ")[0]; // HH:MM:SS

  const tableName = `message${month}${year}`;

  const sql = `
    INSERT INTO ?? (id_ticket, id_klienta, data, godzina, tresc)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [tableName, id_ticket, id_klienta, data, godzina, tresc],
    (err, result) => {
      if (err) {
        console.log("Error in sendMessage:", err);
        return res
          .status(500)
          .json({ success: false, message: `DB error: ${err}` });
      }

      res.status(200).json({
        success: true,
        message: "Message sent successfully!",
        messageId: result.insertId,
        tableName: tableName,
      });
    }
  );
};

module.exports = {
  addRaport,
  getAllTicketsByClientId,
  getAllMessageByTicketId,
  sendMessage,
};
