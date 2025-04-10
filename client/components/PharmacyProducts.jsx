"use client";

import { useState } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/constant/page";

export default function PharmacyProductGrid() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white w-full px-4 py-1 relative">
      <div className="flex items-start flex-row md:gap-10 px-5 mt-5 max-w-7xl mx-auto">
        <div className="mb-6">
          <label className="mr-4 text-gray-7002">Filter by Category:</label>
          <select
            // onChange={handleCategoryChangeEvent}
            className="border border-[#035e85] rounded p-2 px-6 md:px-20 text-gray-500"
            // value={category}
          >
            <option value="">Collection</option>
            <option value="earphones">earphones</option>
            <option value="headphones">headphones</option>
            <option value="speaker">speaker</option>
            <option value="watch">watch</option>
            <option value="laptop">laptop</option>
          </select>
        </div>

        <div className="mb-6">
          <div className="flex items-center w-full md:flex-row flex-col flex-1 pl-4">
            <label className="mr-4 text-gray-700 whitespace-nowrap">
              Filter by Price:
            </label>

            <div className="flex items-center border border-[#035e85] rounded flex-1 pl-4 text-sm">
              <input
                type="text"
                placeholder="Search in"
                className="md:w-full w-20 py-2 px-2 focus:outline-none text-gray-800"
              />
              <Search className="text-gray-500 mr-5" size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="border border-gray-200 bg-white rounded-md overflow-hidden"
          >
            <CardContent className="p-0 relative">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow-sm"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`h-5 w-5 ${
                    favorites[product.id]
                      ? "fill-[#035e85] text-[#035e85]"
                      : "text-gray-400"
                  }`}
                />
              </button>
              <div className="h-48 flex items-center justify-center bg-white p-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
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
              <h3 className="text-sm text-black font-medium text-bl line-clamp-2 h-10">
                {product.name}
              </h3>
              <p className="text-[#035e85] font-bold mt-2">
                AED {product.price.toFixed(2)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* WhatsApp Chat Widget */}
      <a
        href="https://wa.me/message"
        target="_blank"
        aria-label="Contact us on WhatsApp"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#0692cd] px-5 py-2 text-white shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Image
              src="/kainuwa/polic1.png"
              alt="Customer Service"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">turomin hoton katin maganin anan</span>
            <span className="text-sm font-semibold">
              Chat via whatsApp Shiga
            </span>
            <span className="rounded bg-[#0692cd] px-2 py-0.5 text-xs text-white">
              I&apos;m Online
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
