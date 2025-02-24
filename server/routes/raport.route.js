const express = require("express");
const {
  addRaport,
  getAllTicketsByClientId,
  getAllMessageByTicketId,
  sendMessage,
} = require("../controllers/raport.controller");

const router = express.Router();

router.post("/add", addRaport);
router.post("/message/add", sendMessage);

router.get("/ticket/all/:id", getAllTicketsByClientId);
router.get("/all-message/ticket/:ticketId", getAllMessageByTicketId);

module.exports = router;
