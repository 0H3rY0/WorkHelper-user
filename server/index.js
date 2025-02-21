const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user.route");
const itemRoutes = require("./routes/item.route");

app.use(cors());
app.use(express.json());

app.use("/api/uzytkownicy", userRoutes);
app.use("/api/item", itemRoutes);

app.listen(3001, () => console.log("App listening on port 3001"));
