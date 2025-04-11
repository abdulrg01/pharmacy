"use client";

import { DrugsList } from "./drugs-list";
import HomeSection from "./HomeSection";
import { drugsData } from "@/constant/page";

export function MedicineStore() {
  return (
    <div className="w-full flex-1">
      <HomeSection />
      <DrugsList drugs={drugsData} />
    </div>
  )
}

