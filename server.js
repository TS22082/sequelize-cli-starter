const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./views"));

const todoRoutes = require("./controllers/todo-routes");
app.use("/api/todos", todoRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`);
  });
});
