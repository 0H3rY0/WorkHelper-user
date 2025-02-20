const express = require("express");
const {
  login,
  getUser,
  getClientsByUserId,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/login", login);

router.get("/get/:id", getUser);
router.get("/klienci/all/by/:id", getClientsByUserId);

module.exports = router;
