const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  addComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controller/user.controller");
const verifyJWT = require("../middleware/verifyJwt");

router.get("/user/:id", verifyJWT, getUser);
router.get("/users", verifyJWT, getUsers);
router.post("/user/:id/comment", verifyJWT, addComment);
router.get("/user/:id/comments", verifyJWT, getComments);
router.delete("/user/:id/comment/:commentId", verifyJWT, deleteComment);
router.put("/user/:id/comment/:commentId", verifyJWT, updateComment);

module.exports = router;
