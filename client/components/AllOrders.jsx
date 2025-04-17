"use client";
import { getAllOrders } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function AllOrders() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const ordersData = await getAllOrders();
        console.log("AllOrders:", ordersData);
        setOrders(ordersData);
      } catch (error) {
        console.log("Order fetch error:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center md:flex-row flex-col mb-8">
        <Link href="/">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">All Orders</h1>
      </div>

      {orders?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No Orders Yet</h2>
        </div>
      ) : (
        <div className="space-y-8">
          {orders?.map((order) => (
            <div key={order._id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Phone: {order.shippingAddress.phone}
                    </p>
                    <p className="text-sm text-gray-500">
                      Address: {order.shippingAddress.street}
                    </p>
                    <p className="text-sm text-gray-500">
                      Name: {order.user.name}
                    </p>
                  </div>
                  <div className="font-bold text-lg">
                    Total: N{order.totalAmount}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.products.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center border-b pb-4"
                    >
                      <div className="relative h-16 w-16 mr-4 bg-gray-100 rounded">
                        <Image
                          src={item?.image || "/placeholder.svg"}
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
