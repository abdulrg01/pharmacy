import { DrugCard } from "./drug-card";
import { Input } from "./ui/input";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "./ui/button";

export function DrugsList({ drugs }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemsToShow, setItemsToShow] = useState(8); // Changed from 12 to 8

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

  // Limit the number of drugs to display
  const displayedDrugs = filteredDrugs.slice(0, itemsToShow);
  const hasMoreItems = filteredDrugs.length > itemsToShow;

  // Handle show more/less
  const handleShowMore = () => {
    setItemsToShow(filteredDrugs.length);
  };

  const handleShowLess = () => {
    setItemsToShow(8);
    // Scroll back to the top of the list
    window.scrollTo({
      top: document.getElementById("drugs-list-top")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-8 px-4" id="drugs-list-top">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-950">Available Medicines</h2>

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
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedDrugs.map((drug) => (
              <DrugCard key={drug.id} drug={drug} />
            ))}
          </div>

          <div className="mt-8 text-center">
            {hasMoreItems ? (
              <Button
                onClick={handleShowMore}
                variant="outline"
                className="px-8"
              >
                <ChevronDown className="h-4 w-4 mr-2" />
                Show More ({filteredDrugs.length - itemsToShow} more)
              </Button>
            ) : filteredDrugs.length > 8 ? ( // Changed from 12 to 8
              <Button
                onClick={handleShowLess}
                variant="outline"
                className="px-8"
              >
                <ChevronUp className="h-4 w-4 mr-2" />
                Show Less
              </Button>
            ) : null}
          </div>
        </>
      )}
    </section>
  );
}
