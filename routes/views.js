const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
  console.log("i have a hit, ding ding");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  console.log("i have a hit, bing bing!");
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
