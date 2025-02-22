const express = require("express");
const {
  login,
  getUser,
  getClientsByUserId,
  getAllObjectsWithGroupsByUserId,
  getApproprietePerrmision,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/login", login);

router.get("/get/:id", getUser);
router.get("/klienci/all/by/:id", getClientsByUserId);
router.get("/user-data/:id", getAllObjectsWithGroupsByUserId);
router.get("/permission/:id", getApproprietePerrmision);

module.exports = router;
