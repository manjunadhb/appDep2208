const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(cors());

app.get("/asianCountries", (req, res) => {
  res.json(["India", "China", "Pakistan", "Sri Lanka", "Bangladesh"]);
});

app.listen(2222, () => {
  console.log("Listening to Port 2222");
});
