"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, PlusCircle, MinusCircle, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { drugsData } from "@/constant/page";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  addToCart,
  removeFromCart,
  selectCartItemQuantity,
} from "@/lib/store/cartSlice";

export function DrugDetails({ id }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => selectCartItemQuantity(state, id));

  const drug = drugsData.find((drug) => drug.id === id);

  if (!drug) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={() => router.push("/")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={drug.image || "/placeholder.svg"}
            alt={drug.name}
            fill
            className="object-contain p-8"
          />
        </div>

        <div className="flex flex-col">
          <Badge variant="outline" className="w-fit mb-2">
            {drug.category}
          </Badge>
          <h1 className="text-3xl font-bold mb-2">{drug.name}</h1>
          <p className="text-2xl font-bold text-green-600 mb-4">
            N{drug.price}
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{drug.description}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="font-semibold mb-2">Stock</h2>
            <p className="text-gray-700">{drug.stock} units available</p>
          </div>

          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                size="lg"
                className="w-full bg-[#035e85]"
                onClick={() => dispatch(addToCart(id))}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => dispatch(removeFromCart(id))}
                >
                  <MinusCircle className="h-5 w-5" />
                </Button>
                <span className="font-medium text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => dispatch(addToCart(id))}
                >
                  <PlusCircle className="h-5 w-5" />
                </Button>
                <span className="ml-auto font-medium">
                  Total: ${(drug.price * quantity).toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
