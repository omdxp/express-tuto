const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text454554: "World!" });
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
