const express = require("express");
const { login, getUser } = require("../controllers/user.controller");

const router = express.Router();

router.post("/login", login);

router.get("/get/:id", getUser);

module.exports = router;
