"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-[98px]"></div>
      <header
        className={`bg-white w-full z-50 fixed top-0 left-0 right-0 shadow-sm transition-all duration-300`}
      >
        <div className="w-full h-1 bg-gradient-to-r from-[#035e85] via-[#035e85] to-blue-900"></div>
        <div className="flex items-center justify-between md:px-20">
          <div className="flex items-center py-4 px-4">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-64">
                <div className="flex items-center">
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
                    <h1 className="text-blue-950 md:text-4xl text-3xl font-bold">
                      SAUKI
                    </h1>
                    <p className="text-[#035e85] text-xs tracking-wider font-bold">
                      PHARMACEUTICAL LTD
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="/" label="Home" active />
            <NavItem href="/about" label="About" />
            <NavItem href="/drugs" label="Drugs" />
            <NavItem href="/services" label="Services" />
            <NavItem href="/careers" label="Careers" />
            <NavItem href="/contact" label="Contact" />
          </nav>

          <button className="bg-[#035e85] hidden text-white px-6 py-2 rounded-full font-medium md:flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            Login
          </button>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden px-4">
            <button className="p-1 rounded-full text-blue-900 hover:bg-gray-100 transition-colors">
              <Search size={24} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-full text-blue-900 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={cn(
              "fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-blue-900 hover:bg-gray-100 transition-colors ml-auto block"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-6 py-6">
                  <MobileNavItem href="/" label="Home" active />
                  <MobileNavItem href="/about" label="About" />
                  <MobileNavItem href="/drugs" label="Drugs" />
                  <MobileNavItem href="/services" label="Services" />
                  <MobileNavItem href="/careers" label="Careers" />
                  <MobileNavItem href="/contact" label="Contact" />
                </ul>
              </nav>

              <div className="p-4 border-t">
                <button className="bg-[#035e85] md:hidden text-white px-6 py-2 rounded-full font-medium flex items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function NavItem({ href, label, active = false }) {
  return (
    <Link
      href={href}
      className={`text-blue-950 font-bold hover:text-[#035e85] transition-colors relative ${
        active ? "text-[#035e85]" : ""
      }`}
    >
      {label}
      {active && (
        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#035e85]"></span>
      )}
    </Link>
  );
}

function MobileNavItem({ href, label, active = false }) {
  return (
    <li>
      <Link
        href={href}
        className={`block text-lg font-medium transition-colors ${
          active ? "text-[#035e85]" : "text-blue-950"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
