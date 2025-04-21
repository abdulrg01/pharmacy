// "use client";

// import { usePathname, useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { PlusCircle, MinusCircle, User2 } from "lucide-react";
// import { ShoppingCart, Menu } from "lucide-react";
// import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
// import {
//   selectCartItems,
//   selectTotalItems,
//   selectTotalPrice,
//   addToCart,
//   removeFromCart,
// } from "@/lib/store/cartSlice";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Link from "next/link";
// import { navLinks } from "@/constant/page";
// import SigninDialog from "./SigninDialog";
// import { useEffect, useState } from "react";
// import { IoMdNotifications } from "react-icons/io";
// import {
//   getAllNotifications,
//   getUserProfile,
//   updateNotification,
// } from "@/lib/api";
// import AddComment from "./AddComment";

// export function Navbar() {
// const dispatch = useAppDispatch();
// const cart = useAppSelector(selectCartItems);
// const totalItems = useAppSelector(selectTotalItems);
// const totalPrice = useAppSelector(selectTotalPrice);
// const [openDialog, setOpenDialog] = useState(false);
// const [addCommentDialog, setAddCommentDialog] = useState(false);
// const [user, setUser] = useState();
// const [isOpen, setIsOpen] = useState(false);
// const [isOpenNotification, setIsOpenNotification] = useState(false);
// const [notifications, setNotifications] = useState([]);
// const pathname = usePathname();
// const router = useRouter();

// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const userData = await getUserProfile();
//       setUser(userData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   fetchUser();
// }, []);

// useEffect(() => {
//   const fetchNotification = async () => {
//     try {
//       const notificationData = await getAllNotifications();
//       setNotifications(
//         notificationData.notification.filter(
//           (item) => item.status === "unread"
//         )
//       );
//     } catch (error) {
//       console.log("Review fetch error:", error);
//     }
//   };

//   fetchNotification();
// }, []);

// const handleProceedToCheckout = async () => {
//   if (cart.length === 0) return;

//   try {
//     const userData = await getUserProfile();
//     // Proceed if the user is valid
//     router.push("/order-confirmation");
//   } catch (error) {
//     if (
//       error?.message === "Failed to fetch user profile" ||
//       error?.response?.status === 403
//     ) {
//       setOpenDialog(true);
//     }
//   }
// };

// const handleNotificationStatusChange = async (id) => {
//   await updateNotification(id);
// };

//   return (
//     <header className="bg-white sticky top-0 z-10">
//       <div className="w-full h-1 bg-gradient-to-r from-[#035e85] via-[#035e85] to-blue-950"></div>
//       <div className="w-full px-2 py-2">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <div className="mr-2">
//               <svg
//                 width="40"
//                 height="40"
//                 viewBox="0 0 60 60"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0Z"
//                   fill="white"
//                 />
//                 <path
//                   d="M15 15C15 15 25 25 25 40C25 25 35 15 45 15C35 15 25 5 25 20C25 5 15 15 15 15Z"
//                   fill="#56a747"
//                 />
//                 <path
//                   d="M15 45C15 45 25 35 40 35C25 35 15 25 15 15C15 25 5 35 20 35C5 35 15 45 15 45Z"
//                   fill="#2B3990"
//                 />
//               </svg>
//             </div>
//             <div>
//               <h3 className="text-blue-950 text-xl font-bold">SAUKI</h3>
//               <p className="text-[#035e85] text-xs tracking-wide uppercase font-bold">
//                 Medicine Store
//               </p>
//             </div>
//           </Link>

//           <nav className="hidden md:flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-medium transition-colors hover:text-[#035e85] ${
//                   pathname === link.href ? "text-[#035e85]" : "text-blue-950"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-2 px-2">
// {/* Notification */}
// <div>
//   {user && (
//     <DropdownMenu
//       open={isOpenNotification}
//       onOpenChange={setIsOpenNotification}
//     >
//       <DropdownMenuTrigger asChild>
//         <div className="relative cursor-pointer m-2">
//           <IoMdNotifications className="text-2xl cursor-pointer dark:text-white text-[#035e85]" />
//           <span className=" absolute -top-2 -right-2 bg-red-500 rounded-full w-[20px] text-[12px] flex items-center justify-center text-white">
//             {notifications && notifications?.length}
//           </span>
//         </div>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-80">
//         <div className="z-10 divide-y divide-gray-100 max-h-80 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
//           <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
//             <li>
//               <a
//                 href="/orders"
//                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//               >
//                 New notification
//               </a>
//             </li>
//             {user?.user?.isAdmin &&
//               notifications?.map((item, index) => (
//                 <div key={index}>
//                   <div className="flex items-center mb-3 px-4">
//                     <p className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
//                       {item.title}
//                     </p>
//                     <p
//                       className="ms-auto -mx-1.5 -my-1.5 cursor-pointer"
//                       onClick={() =>
//                         handleNotificationStatusChange(item._id)
//                       }
//                     >
//                       {item.status}
//                     </p>
//                   </div>
//                   <div className="border-b dark:border-b-[#ffffff47] border-b-[#00000f] mb-2 px-4">
//                     <p className="text-black dark:text-white">
//                       {item.message}
//                     </p>
//                     <p className="text-black dark:text-white">
//                       {item?.createdAt}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//           </ul>
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )}
// </div>
//             {/* shopping card */}
//             <Sheet>
//               <SheetTrigger>
//                 <Button variant="outline" className="relative">
//                   <ShoppingCart className="h-5 w-5" />
//                   {totalItems > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                       {totalItems}
//                     </span>
//                   )}
//                 </Button>
//               </SheetTrigger>
//               <SheetContent className="overflow-auto h-full p-5 pb-10">
//                 <div className="h-full">
//                   <h2 className="text-3xl font-bold mb-6 text-blue-950">
//                     Your Card
//                   </h2>
//                   <div>
//                     {cart.length > 0 ? (
//                       <div>
//                         <div className="grid grid-cols-1 gap-6">
//                           {cart.map((item) => (
//                             <div
//                               key={item.id}
//                               className="bg-white p-4 rounded-lg shadow-md"
//                             >
//                               <div className="flex items-center">
//                                 <img
//                                   src={item.image || "/placeholder.svg"}
//                                   alt={item.name}
//                                   width={100}
//                                   height={100}
//                                   className="w-24 h-24 object-cover rounded mr-4"
//                                 />
//                                 <div className="flex-1">
//                                   <Link href={`/products/${item.id}`} passHref>
//                                     <h2 className="text-xl font-bold text-blue-500 cursor-pointer">
//                                       {item.name}
//                                     </h2>
//                                   </Link>
//                                   <p className="text-gray-700">
//                                     {item.description}
//                                   </p>
//                                   <p className="text-gray-900 font-bold">
//                                     N{item.price}
//                                   </p>
//                                   <div className="flex items-center mt-2">
//                                     <button
//                                       className="bg-gray-300 text-gray-900 text-xl rounded p-3"
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                         dispatch(removeFromCart(item.id));
//                                       }}
//                                     >
//                                       <MinusCircle className="h-4 w-4" />
//                                     </button>
//                                     <span className="mx-4">
//                                       {item.quantity}
//                                     </span>
//                                     <button
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                         dispatch(addToCart(item.id));
//                                       }}
//                                       className="bg-gray-300 text-gray-900 text-xl rounded p-3"
//                                     >
//                                       <PlusCircle className="h-4 w-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                         <div className="mt-6">
//                           <div className="flex items-center gap-2 pb-10">
//                             <h2 className="text-lg font-bold text-gray-950">
//                               Total Amount:
//                             </h2>
//                             <h2 className="text-2xl font-bold text-black">
//                               N{totalPrice}
//                             </h2>
//                           </div>
//                           <Button
//                             className="w-full bg-green-500"
//                             onClick={handleProceedToCheckout}
//                           >
//                             Proceed to Checkout
//                           </Button>
//                         </div>
//                       </div>
//                     ) : (
//                       <p className="text-gray-700">Your cart is empty.</p>
//                     )}
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
// {/* user profile Navigation */}
// <div>
//   {user ? (
//     <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
//       <DropdownMenuTrigger asChild>
//         <button
//           type="button"
//           className="inline-flex items-center rounded-lg justify-center p-1 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
//         >
//           <svg
//             className="w-5 h-5 me-1"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               stroke="currentColor"
//               stroke-width="2"
//               d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//             />
//           </svg>
//           profile
//           <svg
//             className="w-4 h-4 text-gray-900 dark:text-white ms-1"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="m19 9-7 7-7-7"
//             />
//           </svg>
//         </button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" className="w-80">
//         <div className="z-10 divide-y divide-gray-100 max-h-80 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
//           <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
//             <li>
//               <a
//                 href="/orders"
//                 className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//               >
//                 My Orders
//               </a>
//             </li>
//             {user && user.user?.isAdmin && (
//               <li>
//                 <a
//                   href="/allorders"
//                   className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//                 >
//                   Orders
//                 </a>
//               </li>
//             )}
//             {user && user.user?.isAdmin && (
//               <li>
//                 <a
//                   href="/allReviews"
//                   className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//                 >
//                  Reviews
//                 </a>
//               </li>
//             )}
//             {user && user.user?.isAdmin && (
//               <li>
//                 <a
//                   href="/allUsers"
//                   className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//                 >
//                   Users
//                 </a>
//               </li>
//             )}
//           </ul>

//           <div
//             onClick={() => setAddCommentDialog(true)}
//             className="p-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             <a
//               href="#"
//               className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
//             >
//               Add a Review
//             </a>
//           </div>
//         </div>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   ) : (
// <div onClick={() => setOpenDialog(true)}>
//   <User2 size={20} cursor={"pointer"} />
// </div>
//   )}
// </div>
//             {/* Mobile Navigation */}
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="md:hidden">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Toggle menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="p-4">
//                 <div className="flex flex-col h-full">
//                   <div className="flex items-center justify-between border-b pb-4">
//                     <Link href="/" className="text-xl font-bold text-green-600">
//                       SaukiStore
//                     </Link>
//                   </div>
//                   <nav className="flex flex-col gap-4 mt-8 mb-3">
//                     {navLinks.map((link) => (
//                       <Link
//                         key={link.href}
//                         href={link.href}
//                         className={`text-base font-medium transition-colors hover:text-green-600 ${
//                           pathname === link.href
//                             ? "text-green-600"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {link.name}
//                       </Link>
//                     ))}
//                   </nav>
//                   {user && user.user?.isAdmin && (
//                     <Link
//                       href="/allorders"
//                       className="text-base font-medium text-gray-600 hover:text-green-600 mb-3"
//                     >
//                       All Orders
//                     </Link>
//                   )}
//                   {user && user.user?.isAdmin && (
//                     <Link
//                       href="/allReviews"
//                       className="text-base font-medium text-gray-600 hover:text-green-600"
//                     >
//                       All Reviews
//                     </Link>
//                   )}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//       <SigninDialog
//         openDialog={openDialog}
//         closeDialog={(v) => setOpenDialog(v)}
//       />
// <AddComment
//   addCommentDialog={addCommentDialog}
//   closeCommentDialog={(v) => setAddCommentDialog(v)}
// />
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Search, ChevronDown, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
  addToCart,
  removeFromCart,
} from "@/lib/store/cartSlice";
import {
  setSearchQuery,
  selectSearchQuery,
  clearSearchQuery,
} from "@/lib/store/searchSlice";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import AddComment from "./AddComment";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cart = useAppSelector(selectCartItems);
  const totalItems = useAppSelector(selectTotalItems);
  const totalPrice = useAppSelector(selectTotalPrice);
  const pathname = usePathname();
  const searchQuery = useAppSelector(selectSearchQuery);
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const [addCommentDialog, setAddCommentDialog] = useState(false);
  const [user, setUser] = useState();
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // Initialize local search query from Redux state
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  // Clear search query when navigating away from home or drug-stores pages
  useEffect(() => {
    if (pathname !== "/" && pathname !== "/drug-stores") {
      dispatch(clearSearchQuery());
    }
  }, [pathname, dispatch]);

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

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const notificationData = await getAllNotifications();
        setNotifications(
          notificationData.notification.filter(
            (item) => item.status === "unread"
          )
        );
      } catch (error) {
        console.log("Review fetch error:", error);
      }
    };

    fetchNotification();
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

  const handleNotificationStatusChange = async (id) => {
    await updateNotification(id);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    dispatch(setSearchQuery(value));
  };

  const handleSearchClear = () => {
    setLocalSearchQuery("");
    dispatch(clearSearchQuery());
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Drug Stores", href: "/drug-stores" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Orders", href: "/orders" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white py-4 px-3 md:px-8">
      <div className="max-w-6xl mx-auto md:px-7 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-5">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b pb-4">
                <Link href="/" className="flex items-center">
                  <div className="mr-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0z"
                        fill="url(#paint0_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="0"
                          y1="20"
                          x2="40"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#95BF47" />
                          <stop offset="0.5" stopColor="#5E3B9E" />
                          <stop offset="1" stopColor="#00B0FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">MediStore</span>
                </Link>
              </div>

              {/* Mobile Search */}
              <div className="relative mt-4 mb-4">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  className="w-full h-10 bg-gray-200 rounded-md pl-4 pr-10 focus:outline-none"
                  value={localSearchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && localSearchQuery.trim()) {
                      router.push("/search");
                    }
                  }}
                />
                {localSearchQuery ? (
                  <button
                    className="absolute right-10 top-2.5 text-gray-500 hover:text-gray-700"
                    onClick={handleSearchClear}
                  >
                    <X size={16} />
                  </button>
                ) : null}
                <Search
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                  size={20}
                  onClick={() => {
                    if (localSearchQuery.trim()) {
                      router.push("/search");
                    }
                  }}
                />
              </div>

              <nav className="flex flex-col gap-4 mt-4">
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
                {!user && (
                  <Button
                    onClick={() => setOpenDialog(true)}
                    className="bg-purple-600 text-white hover:bg-purple-700 mt-4"
                  >
                    Sign In
                  </Button>
                )}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M26.071 12.351l-.285.254c-.336.298-.672.582-1.008.866-1.093-.149-2.201-.298-3.323-.418.15-.478.299-.97.448-1.462.672-2.201 1.344-4.403 2.016-6.604l.298-.94h-3.844c-1.717 3.61-3.434 7.234-5.151 10.858-.821.059-1.642.15-2.463.24-.858.09-1.702.195-2.545.314-.672.09-1.329.195-1.986.299l-.806.15.15.791c.328 1.881.657 3.77.985 5.65.09.508.38.649.866.649.224 0 .448-.015.671-.03.821-.059 1.657-.104 2.478-.149.478-.03.963-.045 1.44-.06.24-.015.478-.015.717-.03.344-.015.672-.015 1.016-.015h1.12c.612-.015 1.224-.015 1.836-.015h2.478c.582 2.015 1.164 4.045 1.746 6.06h3.47c-.56-1.94-1.12-3.865-1.687-5.791-.746-.075-1.493-.149-2.24-.224-.329-.03-.657-.06-.985-.104-.314-.03-.642-.06-.94-.134a.725.725 0 01-.553-.493c-.299-.701-.612-1.388-.91-2.09-.03-.074-.06-.148-.09-.223a.132.132 0 01.09-.194c.478-.104.94-.224 1.419-.328.567-.12 1.135-.254 1.702-.374.299-.074.597-.134.895-.194.284-.06.597-.134.881-.194.03 0 .075-.15.09-.045.03-.044 0-.089-.015-.134-.149-.567-.313-1.12-.462-1.687-.06-.224-.12-.433-.179-.657-.06-.209-.12-.403-.164-.627a.195.195 0 00-.12-.149c-.612-.09-1.23-.164-1.851-.239-.866-.104-1.747-.194-2.613-.284-.314-.029-.627-.06-.94-.104-.075-.015-.15-.015-.224-.03-.09-.014-.165-.044-.194-.148a.347.347 0 01-.015-.12c.015-.179.044-.358.074-.537.074-.568.164-1.12.254-1.687.03-.209.06-.418.104-.612 0-.014 0-.03.015-.044 0-.03.015-.045.044-.06.06-.014.12-.014.18-.014.374 0 .747.015 1.135.044 1.03.075 2.061.179 3.077.284.09.014.179.014.268.029h.06a.13.13 0 00.135-.09c.029-.074.044-.149.074-.224.373-1.224.747-2.433 1.12-3.657.044-.134.089-.269.134-.403a.268.268 0 01.104-.148c.388-.269.776-.538 1.165-.806.194-.135.388-.27.582-.404h.015c.03-.015.06-.03.09-.015.044.015.044.074.044.119 0 .075-.015.15-.015.224-.075.732-.164 1.478-.239 2.21-.06.462-.104.94-.164 1.403-.03.253-.06.507-.09.76-.014.164-.044.329-.059.493-.015.09-.015.179-.03.268 0 .03 0 .075.03.09.03.014.06.014.09.014.03 0 .06-.014.09-.014.627-.12 1.24-.24 1.866-.359.597-.12 1.18-.24 1.777-.343.105-.15.194-.45.299-.6.044 0 .074-.15.104-.015.06 0 .09.045.09.105 0 .044-.015.074-.03.119-.09.328-.179.657-.269.985-.12.433-.239.866-.358 1.3-.03.089-.06.194-.104.283-.15.045-.06.075-.105.09-.194.03-.388.06-.582.09-.493.074-1.001.149-1.493.223-.478.075-.94.135-1.418.21-.104.014-.209.044-.314.059-.03 0-.074.015-.104.015a.099.099 0 00-.09.104c0 .03.015.06.015.09.045.134.09.254.12.388.194.642.373 1.3.567 1.941.03.09.044.194.09.269.014.03.044.06.074.074.746.164 1.508.314 2.254.463.672.134 1.343.269 2.015.403l.806.165z"
                  fill="#fff"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="20"
                    x2="40"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#95BF47" />
                    <stop offset="0.5" stopColor="#5E3B9E" />
                    <stop offset="1" stopColor="#00B0FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-bold text-blue-950 text-xl md:text-2xl">
              MediStore
            </span>
          </Link>
        </div>

        {/* Location Selector */}
        <div className="hidden md:flex border rounded-md p-2 w-[180px] mx-4 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-xs text-gray-500">Your Location</p>
              <p className="text-sm font-medium">All</p>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6 relative hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicines..."
              className="w-full h-12 bg-gray-200 rounded-md pl-4 pr-10 focus:outline-none"
              value={localSearchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && localSearchQuery.trim()) {
                  router.push("/search");
                }
              }}
            />
            {localSearchQuery ? (
              <button
                className="absolute right-10 top-2.5 text-gray-500 hover:text-gray-700"
                onClick={handleSearchClear}
              >
                <X size={16} />
              </button>
            ) : null}
            <Search
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              size={20}
              onClick={() => {
                if (localSearchQuery.trim()) {
                  router.push("/search");
                }
              }}
            />
          </div>
        </div>

        {/* Sign In Button and Cart */}
        <div className="flex items-center gap-4">
          <Button className="bg-[#035e85] text-white hover:bg-cyan-600 hidden rounded-full font-semibold md:flex">
            Sign In
          </Button>

          {/* Notification */}
          <div>
            {user && (
              <DropdownMenu
                open={isOpenNotification}
                onOpenChange={setIsOpenNotification}
              >
                <DropdownMenuTrigger asChild>
                  <div className="relative cursor-pointer m-2">
                    <IoMdNotifications className="text-2xl cursor-pointer dark:text-white text-[#035e85]" />
                    <span className=" absolute -top-2 -right-2 bg-red-500 rounded-full w-[20px] text-[12px] flex items-center justify-center text-white">
                      {notifications && notifications?.length}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="z-10 divide-y divide-gray-100 max-h-80 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700">
                    <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                      <li>
                        <a
                          href="/orders"
                          className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          New notification
                        </a>
                      </li>
                      {user?.user?.isAdmin &&
                        notifications?.map((item, index) => (
                          <div key={index}>
                            <div className="flex items-center mb-3 px-4">
                              <p className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                                {item.title}
                              </p>
                              <p
                                className="ms-auto -mx-1.5 -my-1.5 cursor-pointer"
                                onClick={() =>
                                  handleNotificationStatusChange(item._id)
                                }
                              >
                                {item.status}
                              </p>
                            </div>
                            <div className="border-b dark:border-b-[#ffffff47] border-b-[#00000f] mb-2 px-4">
                              <p className="text-black dark:text-white">
                                {item.message}
                              </p>
                              <p className="text-black dark:text-white">
                                {item?.createdAt}
                              </p>
                            </div>
                          </div>
                        ))}
                    </ul>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Shopping Cart */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <div className="relative cursor-pointer border-orange-200 rounded-full">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
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
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <AddComment
        addCommentDialog={addCommentDialog}
        closeCommentDialog={(v) => setAddCommentDialog(v)}
      />
    </header>
  );
}
