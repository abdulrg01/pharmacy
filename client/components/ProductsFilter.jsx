"use client";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsFilter() {
  return (
    <div className="flex justify-between items-center md:mb-4 mb-10">
      <div className="flex items-start md:flex-row flex-col w-full md:w-[300px]">
        <label className="mr-4 text-gray-600 md:flex whitespace-nowrap">
          Filter by Category:
        </label>
        {/* <Select onValueChange={(value) => setSearch(value)} defaultValue="Rabeprazole"> */}
        <Select defaultValue="Rabeprazole">
          <SelectTrigger className="w-[180px] md:w-[300px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Drugs</SelectLabel>
              <SelectItem value="ulcer">Ulcer</SelectItem>
              <SelectItem value="diabetes">Diabetes</SelectItem>
              <SelectItem value="typhoid">Typhoid</SelectItem>
              <SelectItem value="maleria">Maleria</SelectItem>
              <SelectItem value="pile">Pile</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-start w-full  md:flex-row flex-col md:w-[300px]">
        <label className="text-gray-600 whitespace-nowrap">
          Filter by Maximum Price:
        </label>
        <Input
          placeholder="Search in"
          className="w-full"
        />
      </div>
    </div>
  );
}
