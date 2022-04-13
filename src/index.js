const express = require("express");
const app = express();
const path = require("path");

// console.log(__dirname);
const staticPath = path.join(__dirname, "../public");
// console.log(staticPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(3000, () => {
  console.log("listening");
});
