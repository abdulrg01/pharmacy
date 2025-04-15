// const orderService = require("../services/order.service");
const {
  createOrderService,
  getOrdersByUserService,
  getAllOrdersService,
  updateOrderStatusService,
} = require("../service/order.service");

// POST /api/orders
const createOrder = async (req, res) => {
  try {
    const userId = req.user;
    const orderData = req.body;

    const newOrder = await createOrderService(userId, orderData);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/orders/my
const getMyOrders = async (req, res) => {
  try {
    const orders = await getOrdersByUserService(req.user);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/orders (admin)
const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrdersService();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/orders/:orderId/status
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    const updatedOrder = await updateOrderStatusService(orderId, status);
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
};
