const sendNotification = require("../config/sendMail");
const Notification = require("../model/notification");
const User = require("../model/user.model");
const ejs = require("ejs");
const path = require("path");
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
    const user = await User.findById(userId);

    const newOrder = await createOrderService(userId, orderData);
    const data = {
      order: {
        _id: newOrder._id.toString().slice(0, 6),
        name: user.name,
        price: newOrder.totalAmount,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
    };
    const html = await ejs.renderFile(
      path.join(__dirname, "../mails/activation.ejs"),
      data
    );
    await sendNotification({
      email: process.env.EMAIL,
      subject: "New Order",
      template: "activation.ejs",
      data,
    });
    await Notification.create({
      title: "New Order",
      message: `You have a new Order`,
    });
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
