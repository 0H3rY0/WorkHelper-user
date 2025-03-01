const express = require("express");
const cors = require("cors");

const app = express();

const userRoutes = require("./routes/user.route");
const itemRoutes = require("./routes/item.route");
const raportRoutes = require("./routes/raport.route");

app.use(cors({ origin: "https://workhelper-user-front.onrender.com" }));
app.use(express.json());

app.use("/api/uzytkownicy", userRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/raport", raportRoutes);

app.listen(3001, () => console.log("App listening on port 3001"));
