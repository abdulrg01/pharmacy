"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle, User2 } from "lucide-react";
import { ShoppingCart, Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
  addToCart,
  removeFromCart,
} from "@/lib/store/cartSlice";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { navLinks } from "@/constant/page";
import SigninDialog from "./SigninDialog";
import { useEffect, useState } from "react";
import { getUserProfile } from "@/lib/api";
import AddComment from "./AddComment";

export function Navbar() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [openDialog, setOpenDialog] = useState(false);
  const [addCommentDialog, setAddCommentDialog] = useState(false);
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleProceedToCheckout = async () => {
    if (cart.length === 0) return;

    try {
      const userData = await getUserProfile();
      // Proceed if the user is valid
      router.push("/order-confirmation");
    } catch (error) {
      if (
        error?.message === "Failed to fetch user profile" ||
        error?.response?.status === 403
      ) {
        setOpenDialog(true);
      }
    }
  };

  return (
    <header className="bg-white sticky top-0 z-10">
      <div className="w-full h-1 bg-gradient-to-r from-[#035e85] via-[#035e85] to-blue-950"></div>
      <div className="w-full px-2 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <svg
                width="40"
                height="40"
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
              <p className="text-[#035e85] text-xs tracking-wide uppercase font-bold">
                Medicine Store
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#035e85] ${
                  pathname === link.href ? "text-[#035e85]" : "text-blue-950"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 px-2">
            {/* shopping card */}
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-auto h-full p-5 pb-10">
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
                                    N{item.price}
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
                          <div className="flex items-center gap-2 pb-10">
                            <h2 className="text-lg font-bold text-gray-950">
                              Total Amount:
                            </h2>
                            <h2 className="text-2xl font-bold text-black">
                              N{totalPrice}
                            </h2>
                          </div>
                          <Button
                            className="w-full bg-green-500"
                            onClick={handleProceedToCheckout}
                          >
                            Proceed to Checkout
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-700">Your cart is empty.</p>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            {/* user profile Navigation */}
            <div>
              {user ? (
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-lg justify-center p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
                    >
                      <svg
                        className="w-5 h-5 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-width="2"
                          d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      Account
                      <svg
                        className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="z-10 divide-y divide-gray-100 max-h-80 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                      <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                        <li>
                          <a
                            href="/orders"
                            className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            My Orders
                          </a>
                        </li>
                        {user && user.user?.isAdmin && (
                          <li>
                            <a
                              href="/allorders"
                              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              All Orders
                            </a>
                          </li>
                        )}
                        {user && user.user?.isAdmin && (
                          <li>
                            <a
                              href="/allReviews"
                              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              All Reviews
                            </a>
                          </li>
                        )}
                      </ul>

                      <div
                        onClick={() => setAddCommentDialog(true)}
                        className="p-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        <a
                          href="#"
                          className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Add a Review
                        </a>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div onClick={() => setOpenDialog(true)}>
                  <User2 size={20} cursor={"pointer"} />
                </div>
              )}
            </div>
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-4">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" className="text-xl font-bold text-green-600">
                      SaukiStore
                    </Link>
                  </div>
                  <nav className="flex flex-col gap-4 mt-8 mb-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`text-base font-medium transition-colors hover:text-green-600 ${
                          pathname === link.href
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  {user && user.user?.isAdmin && (
                    <Link
                      href="/allorders"
                      className="text-base font-medium text-gray-600 hover:text-green-600 mb-3"
                    >
                      All Orders
                    </Link>
                  )}
                  {user && user.user?.isAdmin && (
                    <Link
                      href="/allReviews"
                      className="text-base font-medium text-gray-600 hover:text-green-600"
                    >
                      All Reviews
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <SigninDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />
      <AddComment
        addCommentDialog={addCommentDialog}
        closeCommentDialog={(v) => setAddCommentDialog(v)}
      />
    </header>
  );
}
