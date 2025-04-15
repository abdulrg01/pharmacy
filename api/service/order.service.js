const Order = require("../model/order.model");

const createOrderService = async (userId, orderData) => {
  const { products, shippingAddress, totalAmount } = orderData;

  const order = new Order({
    user: userId,
    products,
    shippingAddress,
    totalAmount,
  });

  return await order.save();
};

const getOrdersByUserService = async (userId) => {
  return await Order.find({ user: userId })
};

const getAllOrdersService = async () => {
  return await Order.find()
    .populate("user", "name email")
};

const updateOrderStatusService = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  return await order.save();
};

module.exports = {
  createOrderService,
  getOrdersByUserService,
  getAllOrdersService,
  updateOrderStatusService,
};
