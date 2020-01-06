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
    complete: req.body.complete
  })
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(todo => {
    res.json(todo);
  });
});

module.exports = router;
