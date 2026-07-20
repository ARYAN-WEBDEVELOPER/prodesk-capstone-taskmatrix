const express = require("express");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, (req, res) => {
  res.json({
    message: "Protected Tasks Route",
    userId: req.user.id,
  });
});

module.exports = router;