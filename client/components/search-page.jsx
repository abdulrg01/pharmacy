"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAppSelector, useAppDispatch } from "@/lib/store/hooks";
import { selectSearchQuery, setSearchQuery } from "@/lib/store/searchSlice";
import { drugsData } from "@/constant/page";
import { DrugCard } from "./drug-card";

export function SearchPage() {
  const dispatch = useAppDispatch();
  const globalSearchQuery = useAppSelector(selectSearchQuery);
  const [searchQuery, setLocalSearchQuery] = useState(globalSearchQuery);

  // Sync local search query with global search query
  useEffect(() => {
    setLocalSearchQuery(globalSearchQuery);
  }, [globalSearchQuery]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    dispatch(setSearchQuery(value));
  };

  const filteredDrugs = drugsData.filter((drug) =>
    drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Medicines</h1>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search medicines..."
          className="pl-10"
          value={searchQuery}
          onChange={handleSearchChange}
          autoFocus
        />
      </div>

      {searchQuery.trim() === "" ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Enter a search term to find medicines</p>
        </div>
      ) : filteredDrugs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No medicines found matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-gray-600">
            Found {filteredDrugs.length} results for "{searchQuery}"
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDrugs.map((drug) => (
              <DrugCard key={drug.id} drug={drug} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
