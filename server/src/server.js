if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3080;

const api_key = process.env.api_key;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "content-Type");
  next();
});

app.post("/weather", (req, res) => {
  const city = req.body.city;
  const uri = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  axios({
    url: uri,
    responseType: "json",
  }).then((data) => {
    const d = data;
    res.json(d.data);
    res.status(500).json("Internal Server Error!!!");
    res.status(404).json("Not Fount || I don't have that");
  });
});

app.listen(port, () => {});
