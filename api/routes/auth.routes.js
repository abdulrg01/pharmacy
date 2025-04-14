const express = require("express");
const router = express.Router();
const {
  login,
  refresh,
  socialAuth,
  newUser,
} = require("../controller/auth.controller");

router.post("/login", login);
router.get("/refresh", refresh);
router.post("/social", socialAuth);
router.post("/register", newUser);

module.exports = router;
