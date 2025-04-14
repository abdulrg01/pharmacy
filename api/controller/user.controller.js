const User = require("../model/user.model");
const userService = require("../service/user.service");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Get Users Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id || req.query.id;
    const email = req.query.email;

    let user;

    if (userId) {
      user = await User.findById(userId).select("-password").exec();
    } else if (email) {
      user = await User.findOne({ email }).select("-password").exec();
    } else {
      return res.status(400).json({ message: "User ID or email required" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const addComment = async (req, res) => {
  const userId = req.params.id;
  const { text } = req.body;

  if (!text)
    return res.status(400).json({ message: "Comment text is required" });

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.comments.push({ text });
    await user.save();

    res.status(201).json({
      success: true,
      message: "Comment added",
      comments: user.comments,
    });
  } catch (error) {
    console.error("Add Comment Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getComments = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("comments").exec();
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      success: true,
      comments: user.comments,
    });
  } catch (error) {
    console.error("Get Comments Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteComment = async (req, res) => {
  const userId = req.params.id;
  const commentId = req.params.commentId;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.comments.id(commentId).remove();
    await user.save();

    res.json({
      success: true,
      message: "Comment deleted",
      comments: user.comments,
    });
  } catch (error) {
    console.error("Delete Comment Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateComment = async (req, res) => {
  const userId = req.params.id;
  const commentId = req.params.commentId;
  const { text } = req.body;

  if (!text)
    return res.status(400).json({ message: "Comment text is required" });

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const comment = user.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: "Comment not found" });

    comment.text = text;
    await user.save();

    res.json({
      success: true,
      message: "Comment updated",
      comments: user.comments,
    });
  } catch (error) {
    console.error("Update Comment Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUsers,
  getUser,
  addComment,
  getComments,
  updateComment,
  deleteComment,
};
