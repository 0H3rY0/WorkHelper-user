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

router.get("/columns/:tableName", getColumns);

router.post("/table-records/:tableName/:objectId", getTableRecords);

router.get("/:tableName/:id", getRecordById);

router.post("/edit", editItem);

module.exports = router;
