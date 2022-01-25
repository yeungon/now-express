const express = require("express");
const app = express();
const user = require("./routers/user");
const task = require("./routers/task");
const port = 3000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use("/user", user);
app.use("/task", task);

// Home route
app.get("/", (req, res) => {
  res.send(
    "<h1 style = 'display: flex; justify-content:center; align-items: center;'>Welcome to a simply Express CRUD hosted at Vercel<h1>"
  );
});

// 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry, the page you are looking is not available!");
});

app.listen(port, () => {
  console.log(`Server is running at 3000 Visit http://localhost:3000`);
});
