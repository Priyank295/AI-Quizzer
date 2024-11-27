const mongoose = require("mongoose");
const router = require("express").Router();
const {
  signup,
  login,
  deleteUser,
  updateUsername,
} = require("../controllers/authController");

router.post("/register", async (req, res) => {
  signup(req, res);
});
router.post("/login", async (req, res) => {
  login(req, res);
});

router.post("/delete", async (req, res) => {
  deleteUser(req, res);
});

router.post("/rename", async (req, res) => {
  updateUsername(req, res);
});

module.exports = router;
