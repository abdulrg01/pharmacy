"use client";

import { useState } from "react";

import { drugsData } from "@/constant/page";
import { DrugsList } from "./drugs-list";

export function MedicineStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Extract unique categories from drugs data
  const categories = [
    "all",
    ...new Set(drugsData.map((drug) => drug.category)),
  ];

  // Filter drugs based on search query and selected category
  const filteredDrugs = drugsData.filter((drug) => {
    const matchesSearch = drug.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || drug.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <DrugsList
        drugs={filteredDrugs}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />
    </div>
  );
}
