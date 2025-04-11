"use client";

import { useState } from "react";
import { Menu, ShoppingCart, User2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/" className="text-blue-950 hover:text-blue-900 text-sm">
              Home
            </Link>
            <Link
              href="/products"
              className="text-blue-950 hover:text-blue-900 text-sm"
            >
              Products
            </Link>
            <Link href="/about" className="text-blue-950 hover:text-blue-900 text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-blue-950 hover:text-blue-900 text-sm">
              Contact Us
            </Link>
            <Link href="/cart" className="text-blue-950 hover:text-blue-900 text-sm">
              Cart
            </Link>
            <Link href="/profile" className="text-blue-950 hover:text-blue-900 text-sm">
              Profile
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                {cart.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    Your cart is empty
                  </div>
                ) : (
                  <>
                    <div className="max-h-80 overflow-auto">
                      {cart.map((item) => (
                        <DropdownMenuItem
                          key={item.id}
                          className="flex items-center p-4 cursor-default"
                        >
                          <div className="relative h-12 w-12 mr-3 bg-gray-100 rounded">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-contain p-2"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)} x {item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(removeFromCart(item.id));
                              }}
                            >
                              <MinusCircle className="h-4 w-4" />
                            </Button>
                            <span className="w-5 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(addToCart(item.id));
                              }}
                            >
                              <PlusCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="p-4 border-t">
                      <div className="flex justify-between mb-4">
                        <span className="font-medium">Total:</span>
                        <span className="font-bold">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                      <Button
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                      >
                        Confirm Order
                      </Button>
                    </div>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
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
