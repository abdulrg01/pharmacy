import FooterSection from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Logos from "@/components/Logos";
import PharmacyProductGrid from "@/components/PharmacyProducts";
import { products } from "@/constant/page";

export default function page() {
  return (
    <div>
      <HomeSection />
      <Logos />
      <PharmacyProductGrid products={products} />
      <FooterSection />
    </div>
  );
}
