const User = require("../model/user.model");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../service/auth.service");
const jwt = require("jsonwebtoken");

const authHandler = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      // Create user (Signup)
      if (!name)
        return res.status(400).json({ message: "Name is required for signup" });

      const newUser = await User.create({ name, email, password, avatar });

      const token = generateAccessToken(newUser);
      const refreshToken = generateRefreshToken(newUser);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      const createdUser = await User.findById(newUser._id).select("-password");

      return res.status(201).json({
        success: true,
        user: createdUser,
        token,
        message: "User created successfully",
      });
    } else {
      // Login
      const match = await existingUser.matchPassword(password);
      if (!match)
        return res.status(400).json({ message: "Incorrect password" });

      const token = generateAccessToken(existingUser);
      const refreshToken = generateRefreshToken(existingUser);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      const userInfo = await User.findById(existingUser._id).select(
        "-password"
      );

      return res.json({
        success: true,
        user: userInfo,
        token,
        message: "Logged in successfully",
      });
    }
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const socialAuth = async (req, res) => {
  const { name, email, avatar } = req.body;
  try {
    let user = await User.findOne({ email }).exec();

    // Create user if not exists
    if (!user) {
      await User.create({ name, email, avatar });
      user = await User.findOne({ email }).select("-password").exec();
    } else {
      user = await User.findOne({ email }).select("-password").exec();
    }

    const token = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, user, token });
  } catch (error) {
    console.error("Social Auth Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const refresh = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const user = await User.findOne({ name: decoded.name }).exec();
      if (!user) return res.status(401).json({ message: "Unauthorized" });

      const token = generateAccessToken(user);

      res.json({ success: true, user, token });
    }
  );
};

module.exports = { authHandler, refresh, socialAuth };
