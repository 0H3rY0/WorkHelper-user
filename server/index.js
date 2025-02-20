const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user.route");

app.use(cors());
app.use(express.json());

app.get("/get", (req, res) => {
  res.status(200).json({ users: ["user1", "user2"] });
});

app.use("/api/uzytkownicy", userRoutes);

app.listen(3001, () => console.log("App listening on port 3001"));
