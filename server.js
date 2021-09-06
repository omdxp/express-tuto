const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
