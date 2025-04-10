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

export default function HomeSection() {
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

              <div className="flex items-center flex-1 pl-4 text-sm">
                <input
                  type="text"
                  placeholder="Search in"
                  className="w-full py-2 px-2 focus:outline-none text-gray-800"
                />
                <Search className="text-gray-500 mr-5" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
