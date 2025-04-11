import { Search } from "lucide-react";
import { DrugCard } from "./drug-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import Image from "next/image";

export function DrugsList({
  drugs,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}) {
  return (
    <section className="py-2">
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pb-5">
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

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search medicines..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {drugs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No medicines found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {drugs.map((drug) => (
            <DrugCard key={drug.id} drug={drug} />
          ))}
        </div>
      )}
      <a
        href="https://wa.me/message"
        target="_blank"
        aria-label="Contact us on WhatsApp"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex items-center gap-2 rounded-full bg-[#0692cd] px-5 py-2 text-white shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <Image
              src="/whatsapp.png"
              alt="Customer Service"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">turomin hoton katin maganin anan</span>
            <span className="text-sm font-semibold">
              Chat via whatsApp Shiga
            </span>
            <span className="rounded bg-[#0692cd] px-2 py-0.5 text-xs text-white">
              I&apos;m Online
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
