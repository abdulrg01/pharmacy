import { DrugCard } from "./drug-card";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { FaWhatsapp } from 'react-icons/fa';

export function DrugsList({ drugs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract unique categories from drugs data
  const categories = ["all", ...new Set(drugs.map((drug) => drug.category))];

  // Filter drugs based on search query and selected category
  const filteredDrugs = drugs.filter((drug) => {
    const matchesSearch = drug.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || drug.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const phoneNumber = "08063610782";
  const message = encodeURIComponent(
    "Hi! Send the doctor prescription or screenshot of the card."
  );

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-950">
          Available Medicines
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search medicines..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredDrugs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No medicines found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDrugs.map((drug) => (
            <DrugCard key={drug.id} drug={drug} />
          ))}
        </div>
      )}
      <button onClick={handleClick} className="fixed bottom-6 right-6 z-50">
        <div className="flex items-center gap-2 rounded-full bg-[#0692cd] px-5 py-2 text-white shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <FaWhatsapp className="bg-[#56a747] text-white rounded-full p-2 w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">turomin hoton katin maganin anan</span>
            <span className="text-sm font-semibold">
              Chat via whatsap Shiga
            </span>
            <span className="rounded bg-[#0692cd] px-2 py-0.5 text-xs text-white">
              I&apos;m Online
            </span>
          </div>
        </div>
      </button>
    </section>
  );
}
