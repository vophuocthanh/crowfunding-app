require("dotenv").config();
const express = require("express");
const fs = require("fs");
const verifyToken = require("./middleware/auth");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
const jsonServer = require("json-server");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
// app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));
const PORT = 3009;
app.get("/", verifyToken, (req, res) => {
  res.json(database.campaigns);
});

app.listen(PORT, () => console.log("Server started on port" + PORT));