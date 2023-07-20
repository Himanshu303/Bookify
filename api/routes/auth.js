const express = require("express");
const router = express.Router();
const { register, login, profile, logout } = require("../controllers/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/profile", profile);
router.post("/logout", logout);

module.exports = router;
