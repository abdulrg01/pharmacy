"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { selectAllOrders } from "@/lib/store/confirmedOrdersSlice"
import { formatDate } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OrderHistory() {
  const orders = useAppSelector(selectAllOrders)

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

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No Orders Yet</h2>
          <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
          <Link href="/drug-stores">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                    <p className="text-sm text-gray-500">Date: {formatDate(order.date)}</p>
                  </div>
                  <div className="font-bold text-lg">Total: ${order.totalAmount.toFixed(2)}</div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center border-b pb-4">
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
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
