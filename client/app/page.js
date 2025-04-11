import FooterSection from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import { MedicineStore } from "@/components/MedicineStore";

export default function page() {
  return (
    <main className="min-h-screen">
      <HomeSection />
      <MedicineStore />
      <FooterSection />
    </main>
  );
}
