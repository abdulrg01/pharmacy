"use client";

import { drugsData } from "@/constant/page";
import { DrugsList } from "./drugs-list";

export function DrugStores() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-950">Drug Stores</h1>
        <p className="text-gray-600">
          Browse our complete collection of medicines and healthcare products
        </p>
      </div>
      <DrugsList drugs={drugsData} />
    </div>
  );
}
