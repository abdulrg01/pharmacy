import AddToHomeScreenButton from "@/components/AddToHomeScreenButton";
import FooterSection from "@/components/Footer";
import { MedicineStore } from "@/components/MedicineStore";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MedicineStore />
      <FooterSection />
      <AddToHomeScreenButton />
    </main>
  )
}
