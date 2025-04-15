const express = require("express");
const router = express.Router();
const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controller/order.controller");
const verifyJWT = require("../middleware/verifyJwt");
const { adminOnly } = require("../middleware/authMiddleware");

// Create order
router.post("/", verifyJWT, createOrder);

// Get user's own orders
router.get("/my", verifyJWT, getMyOrders);

// Get all orders (admin)
router.get("/", verifyJWT, getAllOrders);

// Update order status (admin)
router.put("/:orderId/status", verifyJWT, updateOrderStatus);

module.exports = router;
