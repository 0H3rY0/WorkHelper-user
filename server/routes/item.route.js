const express = require("express");
// const { addAlarm, editAlarmy } = require("../controllers/alarmController");

const {
  getColumns,
  getTableRecords,
  getRecordById,
  editItem,
  addRecord,
} = require("../controllers/item.controller");

const router = express.Router();

router.get("/columns/:tableName", getColumns);

router.post("/table-records/:tableName/:objectId", getTableRecords);

router.get("/:tableName/:id", getRecordById);

router.post("/edit/:tableName", editItem);

router.get("/test", (req, res) => {
  res.send("Test working");
});

router.post("/add/:tableName", addRecord);

module.exports = router;
