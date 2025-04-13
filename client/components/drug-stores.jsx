"use client";

import { drugsData } from "@/constant/page";
import { DrugsList } from "./drugs-list";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function DrugStores() {
  return (
    <section>
      <div id="hero-section" className="relative h-[250px] w-full mb-5">
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src="/pharmacy/aboutbg.jpg"
          alt="Pharmacy Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-4 md:text-5xl text-4xl font-bold px-3 text-[#0692cd] whitespace-nowrap">
            Sauki Drug Stores
          </h1>
          <div className="flex items-center gap-1 text-lg">
            <Link href="/drug-stores" className="hover:underline">
              Stores
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#7b1fa2]">Drug Stores</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <DrugsList drugs={drugsData} />
      </div>
    </section>
  );
}
