const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// console.log(__dirname);
// const staticPath = path.join(__dirname, "../public");
// console.log(staticPath);
const templatePath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

// app.use(express.static(staticPath));

// to setUp view engine
app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index.hbs", {
    name: "ram",
  });
});

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(3001, () => {
  console.log("listening");
});
