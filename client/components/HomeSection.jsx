"use client";
import { Search } from "lucide-react";
import AnimatedBurger from "./animated-burger";
import Header from "./Nav";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeSection() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search === "") {
      return;
    } else {
      router.push(`/drugs?name=${search}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with yellow background */}
      <div className="bg-[#035e85] flex-1">
        <Header />

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center">
          {/* Burger Image */}
          <div className="w-full md:w-1/2 flex justify-center md:mt-10">
            <AnimatedBurger />
          </div>

          {/* Hero Text and Search */}
          <div className="w-full md:w-1/2 space-y-6 -mt-14">
            <h1 className="text-5xl md:text-6xl max-sm:text-center font-bold text-white">
              Sauki delivery
            </h1>
            <p className="text-xl md:text-2xl max-sm:text-center text-white">
              Zamu kawo maka magani duk inda kake. Yi mana magana ta whatsApp
              dinmu
            </p>

            {/* Address Input */}
            <div className="bg-white rounded-full p-1 flex items-center shadow-md">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Drugs</SelectLabel>
                    <SelectItem value="apple">Ulcer</SelectItem>
                    <SelectItem value="banana">Diabetes</SelectItem>
                    <SelectItem value="blueberry">Typhoid</SelectItem>
                    <SelectItem value="grapes">Maleria</SelectItem>
                    <SelectItem value="pineapple">Pile</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <div className="flex items-center flex-1 pl-4 text-sm relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search in"
                  className="w-full py-2 px-2 focus:outline-none text-gray-800"
                />
                <Search
                  className={`${search ? "hidden" : "flex"} text-gray-500 mr-5`}
                  size={20}
                />
                {search && (
                  <button
                    type="submit"
                    className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-[#035e85] rounded-e-full border border-[#035e85] hover:bg-[#035e85] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-[#035e85] dark:hover:bg-blue-[#035e85] dark:focus:ring-[#035e85]"
                    onClick={handleSearch}
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
