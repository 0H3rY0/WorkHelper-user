const express = require("express");
// const { addAlarm, editAlarmy } = require("../controllers/alarmController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  deleteRecord,
  editItem,
} = require("../controllers/item.controller");

const router = express.Router();

// router.post("/alarmy/add", addAlarm);

// const tableName = "alarmy";

router.get("/columns/:tableName", getColumns);
// router.post("/table-records", (req, res) =>
//   getTableRecords({ ...req, params: { tableName } }, res)
// );
// router.get("/:id", (req, res) =>
//   getRecordById({ ...req, params: { tableName, id: req.params.id } }, res)
// );
// router.post("/delete", (req, res) =>
//   deleteRecord({ ...req, params: { tableName } }, res)
// );

// router.post("/edit", (req, res) =>
//   editItem({ ...req, params: { tableName } }, res)
// );

module.exports = router;
