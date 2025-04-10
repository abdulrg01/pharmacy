"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProductsCard({ item }) {
   const [favorites, setFavorites] = useState({});
   const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <Link href={`productDetails/${item.id}`}>
      <Card
        key={item.id}
        className="border border-gray-200 bg-white rounded-md overflow-hidden"
      >
        <CardContent className="p-0 relative">
          <button
            onClick={() => toggleFavorite(item.id)}
            className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm"
            aria-label="Add to favorites"
          >
            <Heart
              className={`h-5 w-5 ${
                favorites[item.id]
                  ? "fill-[#035e85] text-[#035e85]"
                  : "text-gray-400"
              }`}
            />
          </button>
          <div className="h-48 flex items-center justify-center bg-white p-4">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="absolute bottom-2 left-2 flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm font-medium">5</span>
          </div>
          <Button className="absolute bottom-2 right-2 bg-[#035e85] hover:bg-[#035e85] text-white rounded-md px-3 py-1 text-sm flex items-center">
            <ShoppingCart className="h-4 w-4 mr-1" />
            ADD
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-4 pt-2">
          <h3 className="text-sm text-black font-medium line-clamp-2 uppercase">
            {item.name}
          </h3>
          <h3 className="text-sm text-black font-medium line-clamp-2 h-10">
            {item.desc}
          </h3>
          <p className="text-[#035e85] font-bold mt-2">
            AED {item.price.toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
