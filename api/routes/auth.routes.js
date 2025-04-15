const express = require("express");
const router = express.Router();
const {
  refresh,
  socialAuth,
  authHandler,
} = require("../controller/auth.controller");

router.post("/login", authHandler);
router.get("/refresh", refresh);
router.post("/social", socialAuth);

module.exports = router;
