"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle,
  ShoppingBag,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
  clearCart,
} from "@/lib/store/cartSlice";
import { addOrder } from "@/lib/store/confirmedOrdersSlice";
import Image from "next/image";
import { Input } from "./ui/input";
import { createOrder } from "@/lib/api";

export function OrderConfirmation() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [form, setForm] = useState({ street: "", phone: "" });

  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [confirmedItems, setConfirmedItems] = useState(0);
  const [confirmedAmount, setConfirmedAmount] = useState(0);

  // If cart is empty and not confirmed, redirect to home
  if (cart.length === 0 && !isConfirmed) {
    router.push("/");
    return null;
  }

  const handleConfirmOrder = () => {
    if (cart.length === 0) return;

    // Store the values before clearing the cart
    const itemsCount = totalItems;
    const finalAmount = totalPrice + totalPrice * 0.1; // Including tax

    // Set the values in state for display after confirmation
    setConfirmedItems(itemsCount);
    setConfirmedAmount(finalAmount);

    // Generate order ID
    const newOrderId = `order-${Date.now()}`;
    setOrderId(newOrderId);

    const orderData = {
      products: cart,
      totalAmount: totalPrice,
      shippingAddress: {
        street: form.street,
        phone: form.phone,
      },
    };
    createOrder(orderData).then((data) => {
      console.log("Order response:", data);
    });
    dispatch(
      addOrder({
        items: cart,
        totalAmount: finalAmount,
        id: newOrderId,
      })
    );
    dispatch(clearCart());
    setIsConfirmed(true);
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {!isConfirmed ? (
          <>
            <h1 className="text-3xl font-bold mb-6 text-blue-950">
              Order Review
            </h1>
            <div className="bg-white rounded-lg shadow-sm border mb-6">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-4 text-blue-950">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border-b pb-4"
                    >
                      <div className="relative h-16 w-16 mr-4 bg-gray-100 rounded">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          N{item.price} x {item.quantity}
                        </p>
                      </div>
                      <div className="font-medium">
                        N{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Phone:</span>
                  <Input
                    type="text"
                    placeholder="Phone"
                    className="md:max-w-92 max-w-52 w-full"
                    name="phone"
                    id="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Inda Zaakawo:</span>
                  <Input
                    type="text"
                    placeholder="Street"
                    className="md:max-w-92 max-w-52 w-full"
                    name="street"
                    id="street"
                    required
                    value={form.street}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">N{totalPrice}</span>
                </div>
                <div className="flex justify-between pt-4 border-t mt-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-bold">
                    N{totalPrice + totalPrice * 0.2}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link href="/drug-stores">
                <Button variant="outline">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              <Button
                onClick={handleConfirmOrder}
                className="bg-green-600 hover:bg-green-700"
              >
                Confirm Order
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>

            <h1 className="text-3xl font-bold mb-4 text-blue-950">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 mb-8">
              Thank you for your order. Your order has been received and is
              being processed.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <div className="flex justify-between mb-4 pb-4 border-b">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderId}</span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex justify-between mb-4 pb-4 border-b">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-medium">N{confirmedItems}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold">N{confirmedAmount}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/drug-stores">
                <Button variant="outline" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/orders">
                <Button className="w-full sm:w-auto">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  View All Orders
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
