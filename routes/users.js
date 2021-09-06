const express = require("express");

const router = express.Router();
router.use(logger);

// static routes should be above dynamic routes

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { fName: "Test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.fName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { fName: req.body.fName });
  }
});

router
  .route("/:userId")
  .get((req, res) => {
    console.log(req.user);
    const id = req.params.userId;
    res.send(`Get user with id: ${id}`);
  })
  .put((req, res) => {
    const id = req.params.userId;
    res.send(`Update user with id: ${id}`);
  })
  .delete((req, res) => {
    const id = req.params.userId;
    res.send(`Delete user with id: ${id}`);
  });

const users = [{ name: "Omar" }, { name: "Yasser" }];

// middleware
router.param("userId", (req, res, next, userId) => {
  req.user = users[userId];
  console.log(userId);
  next();
});

// middleware function
function logger(req, res, next) {
  console.log(req.method + " " + req.originalUrl);
  next();
}

module.exports = router;
