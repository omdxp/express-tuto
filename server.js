const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.download("./server.js");
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
