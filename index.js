const express = require("express");
const app = express();
var user = require("./routers/user");
const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use("/user", user);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Vietnamese Graphql");
});

app.get("/task", (req, res) => {
  res.send("GET request - task");
});

app.post("/task", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "Task created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000 Visit http://localhost:5000`);
});
