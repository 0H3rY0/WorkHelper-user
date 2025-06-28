const db = require("../config/db");
require("dotenv").config();

const DATABASE_NAME = process.env.DB_NAME;

const getColumns = (req, res) => {
  const { tableName } = req.params;

  const sql = `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ? AND TABLE_SCHEMA = '${DATABASE_NAME}'`;

  db.query(sql, [tableName], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results.map((row) => row.COLUMN_NAME));
  });
};

const getTableRecords = (req, res) => {
  const { filters } = req.body;
  const { tableName, objectId } = req.params;

  console.log(objectId);

  let sql = `SELECT * FROM ${tableName}`;
  let params = [];

  if (filters && Object.keys(filters).length > 0) {
    const conditions = Object.keys(filters)
      .map((key) => {
        const filter = filters[key];
        if (typeof filter === "object" && filter.text !== undefined) {
          return filter.zawiera ? `${key} LIKE ?` : `${key} NOT LIKE ?`;
        }
        return `${key} LIKE ?`;
      })
      .join(" AND ");

    sql += ` WHERE ${conditions}`;
    params = Object.values(filters).map((filter) =>
      typeof filter === "object" && filter.text !== undefined
        ? `%${filter.text}%`
        : `%${filter}%`
    );
  }

  if (objectId) {
    sql += filters && Object.keys(filters).length > 0 ? " AND" : " WHERE";
    sql += " id_obiektu = ?";
    params.push(objectId);
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const getRecordById = (req, res) => {
  const { tableName, id } = req.params;
  const sql = `SELECT * FROM ${tableName} WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

const deleteRecord = (req, res) => {
  const { tableName } = req.params;
  const { date, id } = req.body;

  if (!id || !date) {
    return res.status(400).json({ message: "id or date not provided" });
  }

  const sql = `UPDATE ${tableName} SET dataDO = ? WHERE id = ?`;

  db.query(sql, [date, id], (err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting record", error: err });
    }
    res.json({ message: "Record deleted successfully" });
  });
};

// edit endpoint

const editItem = async (req, res) => {
  const { tableName } = req.params;
  const { id, ...fields } = req.body;

  if (!id) {
    return res.status(400).json({ message: "ID not found" });
  }

  if (Object.keys(fields).length === 0) {
    return res.status(400).json({ message: "No data available" });
  }

  try {
    const updates = Object.keys(fields)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = [...Object.values(fields), id];

    const sql = `UPDATE ${tableName} SET ${updates} WHERE id = ?`;

    db.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(200).json({
        message: "Correct update",
        affectedRows: result.affectedRows,
      });
    });
  } catch (error) {
    console.error("Update object:", error);
    res.status(500).json({ message: "server error" });
  }
};

const addRecord = (req, res) => {
  const { tableName } = req.params;
  const formData = req.body;

  const columns = Object.keys(formData);
  const values = Object.values(formData);

  const sql = `
    INSERT INTO ${tableName} (${columns.join(", ")}) 
    VALUES (${columns.map(() => "?").join(", ")})
  `;

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: `${tableName} added successfully`,
      recordId: result.insertId,
    });
  });
};

const getAllItems = (req, res) => {
  const { tableName } = req.params;

  const allowedTables = ["klienci", "uzytkownicy", "grupy", "obiekty"];
  if (!allowedTables.includes(tableName)) {
    return res.status(400).json({ error: "Incorrect table" });
  }

  const sql = `SELECT * FROM ??`;
  db.query(sql, [tableName], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
};

module.exports = {
  addRecord,
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
  getAllItems,
};
