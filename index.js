const express = require("express");
const app = express();

var birds = require('./routers/bird')

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

app.use('/birds', birds)

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Vietnamese Graphql");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([{ name: "Vuong Nguyen", location: "New Zealand" }]);
});

app.get("/test", (req, res) => {
  res.json([{ name: "test" }]);
});

app.get("/dictionary/api/v1/:word", (req, res) => {
  res.json([{ name: "Vuong Nguyen", location: "New Zealand" }]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
