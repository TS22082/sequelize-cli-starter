const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Todo.findAll({}).then(todo => {
    res.json(todo);
  });
});

router.post("/", (req, res) => {
  db.Todo.create({
    text: req.body.text,
    complete: false
  }).then(todo => {
    res.json(todo);
  });
});

module.exports = router;
