const express = require("express");

const router = express.Router();

// static routes should be above dynamic routes

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.post("/", (req, res) => {
  res.send("Create user");
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

module.exports = router;
