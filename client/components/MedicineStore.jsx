"use client";

import { CategoryTabs } from "./category-tabs";
import { DrugsList } from "./drugs-list";
import HomeSection from "./HomeSection";
import { drugsData } from "@/constant/page";

export function MedicineStore() {
  return (
    <div className="flex-1">
      <CategoryTabs />
      <HomeSection />
      <div className="container mx-auto px-6 md:px-24">
        <DrugsList drugs={drugsData} />
      </div>
    </div>
  );
}
