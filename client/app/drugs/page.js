"use client";
import ProductsCard from "@/components/ProductsCard";
import { categories, products } from "@/constant/page";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const search = searchParams?.get("name");

  const [medicine, setMedicine] = useState([]);
  const [drugs, setDrugs] = useState("All");

  useEffect(() => {
    if (drugs === "All") {
      setMedicine(products);
    }
    if (drugs !== "All") {
      setMedicine(products.filter((item) => item.name === drugs));
    }
    if (search) {
      setMedicine(
        products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [drugs, search]);

  const findMatchingCategory = (productName) => {
    return categories.find((category) =>
      category.list.some((item) =>
        productName.toLowerCase().includes(item.toLowerCase())
      )
    );
  };

  const matchedCategory = findMatchingCategory(drugs);
  const bgColor = matchedCategory ? "bg-[#035e85]" : "bg-[#5050cb]";  

  return (
    <div>
      <div className="w-full flex items-center flex-wrap">
        <div
          className={`h-[35px] ${
            drugs === "All" ? "bg-[#035e85]" : "bg-[#5050cb]"
          } m-3 px-3 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
          onClick={() => setDrugs("All")}
        >
          All
        </div>
        {categories.map((item, index) => (
          <div key={index}>
            <div
              className={`h-[35px] ${bgColor} m-3 px-2 rounded-[30px] flex items-center justify-center font-Poppins cursor-pointer`}
              onClick={() => setDrugs(item.name)}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
      {medicine && medicine.length === 0 && (
        <p className="bg-transparent mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center min-h-[50%] flex items-center">
          {search
            ? "No medicine found!"
            : "No medicine found in this category. Please try anther one!"}
        </p>
      )}
      <br />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:gap-[35px] mb-12 border-0 mt-14">
        {medicine?.map((item, index) => (
          <>
            <ProductsCard item={item} key={item.id} />
          </>
        ))}
      </div>
    </div>
  );
}
