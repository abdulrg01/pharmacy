"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export function CategoryTabs() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const tabsRef = useRef(null);

  const categories = [
    {
      name: "Painkillers",
      icon: "💊",
      href: "/drug-stores?category=painkillers",
    },
    {
      name: "Antibiotics",
      icon: "🧪",
      href: "/drug-stores?category=antibiotics",
    },
    { name: "Vitamins", icon: "🍊", href: "/drug-stores?category=vitamins" },
    { name: "Allergy", icon: "🌿", href: "/drug-stores?category=allergy" },
    { name: "Digestive", icon: "🧠", href: "/drug-stores?category=digestive" },
    { name: "First Aid", icon: "🩹", href: "/drug-stores?category=firstaid" },
  ];

  const scroll = (direction) => {
    if (tabsRef.current) {
      const { scrollWidth, clientWidth } = tabsRef.current;
      const scrollAmount = clientWidth / 2;

      if (direction === "left") {
        tabsRef.current.scrollLeft -= scrollAmount;
        setScrollPosition(Math.max(0, scrollPosition - scrollAmount));
      } else {
        tabsRef.current.scrollLeft += scrollAmount;
        setScrollPosition(
          Math.min(scrollWidth - clientWidth, scrollPosition + scrollAmount)
        );
      }
    }
  };

  // Update scroll position when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (tabsRef.current) {
        setScrollPosition(tabsRef.current.scrollLeft);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white flex items-center max-w-6xl mx-auto px-3 md:px-7">
      <div className="hidden md:flex">
        <button className="flex items-center px-4 py-2 mr-6 bg-[#035e85] text-white rounded-md">
          <span className="mr-2">☰</span>
          <span className="font-medium">ALL CATEGORIES</span>
          <ChevronDown size={16} className="ml-2" />
        </button>
      </div>

      <div
        ref={tabsRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex py-3 px-4 space-x-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="flex items-center min-w-[80px] gap-1 text-lg font-semibold text-gray-700 hover:text-green-600"
            >
              <span className="text-xl mb-1">{category.icon}</span>
              <span className="text-xs whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-r-md ${
            scrollPosition <= 0 ? "hidden" : "block"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-l-md ${
            tabsRef.current &&
            scrollPosition >=
              tabsRef.current.scrollWidth - tabsRef.current.clientWidth - 10
              ? "hidden"
              : "block"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
