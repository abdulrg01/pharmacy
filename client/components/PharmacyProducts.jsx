"use client";

import { useState } from "react";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/constant/page";

export default function PharmacyProductGrid({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  const [favorites, setFavorites] = useState({});
  const [drugs, setDrugs] = useState("");
  const [search, setSearch] = useState("");

  // const handleDrugsChangeEvent = (e) => {
  //   setDrugs(e.target.value);
  // };

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearch(value ? value : "");
  // };

  const filteredProducts = products.filter((product) => {
    const searchCondition = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const drugsCondition = drugs ? product.category === drugs : true;

    return searchCondition && drugsCondition;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white w-full px-4 py-2 relative">
      {/* <div className="flex items-start flex-row md:gap-10 px-5 mt-5 max-w-7xl mx-auto">
        <div className="mb-6">
          <label className="mr-4 text-gray-7002">Filter by drugs:</label>
          <select
            onChange={handleDrugsChangeEvent}
            className="border border-[#035e85] rounded p-2 px-6 md:px-20 text-gray-500"
            value={drugs}
          >
            <option value="">Medicine</option>
            <option value="Pain Relief">Ulcer</option>
            <option value="diabetes">Diabetes</option>
            <option value="pile">Pile</option>
            <option value="maleria">Maleria</option>
            <option value="typhoid">Typhoid</option>
          </select>
        </div>

        <div className="mb-6">
          <div className="flex items-center w-full md:flex-row flex-col flex-1 pl-4">
            <label className="mr-4 text-gray-700 whitespace-nowrap">
              Filter by Search:
            </label>

            <div className="flex items-center border border-[#035e85] rounded flex-1 pl-4 text-sm">
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search in"
                className="md:w-full w-20 py-2 px-2 focus:outline-none text-gray-800"
              />
              <Search className="text-gray-500 mr-5" size={20} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {/* {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SelectItem>
            ))} */}
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search medicines..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5">
        {filteredProducts.map((product) => (
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
              <h3 className="text-sm text-black font-medium line-clamp-2 uppercase">
                {product.name}
              </h3>
              <h3 className="text-sm text-black font-medium line-clamp-2 h-10">
                {product.desc}
              </h3>
              <p className="text-[#035e85] font-bold mt-2">
                AED {product.price.toFixed(2)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex items-center justify-center py-10">
        <Button className="bg-[#035e85]">View more</Button>
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
              src="/whatsapp.png"
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
