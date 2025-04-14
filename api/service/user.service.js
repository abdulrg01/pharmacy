const User = require("../model/user.model");

const getAllUsers = async () => {
  return await User.find().select("-password");
};

module.exports = {
  getAllUsers,
};
