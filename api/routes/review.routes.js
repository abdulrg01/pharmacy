const express = require("express");
const router = express.Router();
const { createReview, getAllReview } = require("../controller/review.controller");
const verifyJWT = require("../middleware/verifyJwt");
const { adminOnly } = require("../middleware/authMiddleware");

router.post("/", verifyJWT, createReview);

// (admin)
router.get("/", verifyJWT, getAllReview);

module.exports = router;
