var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function (req, res) {
  res.send("Username listed here - home page");
});

router.post("/", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "Task created", name, location });
});

router.get("/:id", function (req, res) {
  res.send("This is task: " + req.params.id);
});

module.exports = router;
