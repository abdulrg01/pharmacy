const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
} = require("../controller/user.controller");
const verifyJWT = require("../middleware/verifyJwt");

router.get("/profile", verifyJWT, getUser);
router.get("/", verifyJWT, getUsers);

module.exports = router;
