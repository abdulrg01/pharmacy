"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Search, Heart, ShoppingBag, User } from "lucide-react";

export function MobileFooterNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Search",
      href: "/search",
      icon: Search,
    },
    {
      name: "Store",
      href: "/drug-stores",
      icon: Heart,
    },
    {
      name: "Orders",
      href: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Account",
      href: "/account",
      icon: User,
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t py-2 px-4">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center ${
                isActive ? "text-green-600" : "text-gray-500"
              } transition-colors`}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
