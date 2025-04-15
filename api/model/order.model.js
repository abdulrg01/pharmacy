// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      //   product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: { type: String, required: true },
      description: String,
      price: { type: Number, required: true },
      //   category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
      category: String,
      image: String,
      createdAt: { type: Date, default: Date.now },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalAmount: Number,
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered"],
    default: "Pending",
  },
  //   shippingAddress: {
  //     street: String,
  //     city: String,
  //     state: String,
  //     zip: String,
  //     country: String,
  //   },
  shippingAddress: {
    street: String,
    phone: String,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
