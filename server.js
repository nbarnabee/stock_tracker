const express = require("express");
const app = express();
const db = require("./config/database");
const mainRoutes = require("./routes/main");

require("dotenv").config({ path: "./config/.env" });

db.establishConnection();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
