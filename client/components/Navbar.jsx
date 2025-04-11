"use client";

import { useState } from "react";
import { Menu, ShoppingBagIcon, ShoppingCart, User2, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
  addToCart,
  removeFromCart,
} from "@/lib/store/cartSlice";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="w-full h-1 bg-gradient-to-r from-[#035e85] via-[#035e85] to-blue-950"></div>
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0Z"
                  fill="white"
                />
                <path
                  d="M15 15C15 15 25 25 25 40C25 25 35 15 45 15C35 15 25 5 25 20C25 5 15 15 15 15Z"
                  fill="#56a747"
                />
                <path
                  d="M15 45C15 45 25 35 40 35C25 35 15 25 15 15C15 25 5 35 20 35C5 35 15 45 15 45Z"
                  fill="#2B3990"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-blue-950 text-xl font-bold">SAUKI</h3>
              <p className="text-[#035e85] text-xs tracking-wider font-bold">
                PHARMACEUTICAL LTD
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4 font-semibold">
            <Link
              href="/"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Home
            </Link>
            <Link
              href="/drugs"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Drugs
            </Link>
            <Link
              href="/about"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/cart"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Cart
            </Link>
            <Link
              href="/profile"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-auto h-full p-5">
                <div className="h-full">
                  <h2 className="text-3xl font-bold mb-6 text-blue-950">
                    Your Card
                  </h2>
                  <div>
                    {cart.length > 0 ? (
                      <div>
                        <div className="grid grid-cols-1 gap-6">
                          {cart.map((item) => (
                            <div
                              key={item.id}
                              className="bg-white p-4 rounded-lg shadow-md"
                            >
                              <div className="flex items-center">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  width={100}
                                  height={100}
                                  className="w-24 h-24 object-cover rounded mr-4"
                                />
                                <div className="flex-1">
                                  <Link href={`/products/${item.id}`} passHref>
                                    <h2 className="text-xl font-bold text-blue-500 cursor-pointer">
                                      {item.name}
                                    </h2>
                                  </Link>
                                  <p className="text-gray-700">
                                    {item.description}
                                  </p>
                                  <p className="text-gray-900 font-bold">
                                    ${item.price}
                                  </p>
                                  <div className="flex items-center mt-2">
                                    <button
                                      className="bg-gray-300 text-gray-900 text-xl rounded p-3"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(removeFromCart(item.id));
                                      }}
                                    >
                                      <MinusCircle className="h-4 w-4" />
                                    </button>
                                    <span className="mx-4">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(addToCart(item.id));
                                      }}
                                      className="bg-gray-300 text-gray-900 text-xl rounded p-3"
                                    >
                                      <PlusCircle className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <div className="flex items-center gap-2">
                            <h2 className="text-lg font-bold text-gray-950">
                              Total Amount:
                            </h2>
                            <h2 className="text-2xl font-bold text-black">
                              N{totalPrice.toFixed(2)}
                            </h2>
                          </div>
                          <button
                            className="bg-green-500 text-white px-4 py-2 rounded-full my-5"
                            onClick={() => router.push("/order")}
                          >
                            Proceed to Checkout
                          </button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-700">Your cart is empty.</p>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <User2 size={20} cursor={"pointer"} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-full text-blue-950 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
