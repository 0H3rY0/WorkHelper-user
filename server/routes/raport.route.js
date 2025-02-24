const express = require("express");
const {
  addRaport,
  getAllTicketsByClientId,
} = require("../controllers/raport.controller");

const router = express.Router();

router.post("/add", addRaport);
router.get("/ticket/all/:id", getAllTicketsByClientId);

module.exports = router;
