const express = require("express");
const { addRaport } = require("../controllers/raport.controller");

const router = express.Router();

// router.post("/login", login);

// router.get("/get/:id", getUser);
// router.get("/klienci/all/by/:id", getClientsByUserId);
// router.get("/user-data/:id", getAllObjectsWithGroupsByUserId);
// router.get("/permission/:id", getApproprietePerrmision);

router.post("/add", addRaport);

module.exports = router;
