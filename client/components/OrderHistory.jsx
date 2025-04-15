"use client";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMyOrdersApi, getUserProfile } from "@/lib/api";
import { useEffect, useState } from "react";
import SigninDialog from "./SigninDialog";

export function OrderHistory() {
  const [user, setUser] = useState();
  const [orders, setOrders] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile();
        const ordersData = await getMyOrdersApi();

        setUser(userData);
        setOrders(ordersData);
      } catch (error) {
        if (
          error?.message === "Failed to fetch user profile" ||
          error?.response?.status === 403
        ) {
          setOpenDialog(true);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Your Orders</h1>
      </div>

      {!user ? (
        <>
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Sign in to view your Orders
            </h2>
            <p className="text-gray-600 mb-6">
              You haven't placed any orders yet.
            </p>
            <Button onClick={() => setOpenDialog(true)}>Login</Button>
          </div>
        </>
      ) : (
        <>
          {orders.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">No Orders Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't placed any orders yet.
              </p>
              <Link href="/drug-stores">
                <Button>Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {orders.map((order) => (
                <div
                  key={order._id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div className="bg-gray-50 p-4 border-b">
                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">
                          Order ID: {order._id}
                        </p>
                        <p className="text-sm text-gray-500">
                          Date: {order.createdAt}
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
                              ${item.price} x {item.quantity}
                            </p>
                          </div>
                          <div className="font-medium">
                            ${item.price * item.quantity}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <SigninDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />
    </div>
  );
}
