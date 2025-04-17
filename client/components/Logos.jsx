import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

export default function Logos() {
  return (
    <section className="bg-transparent w-full flex items-center justify-center overflow-hidden">
      <div className="group relative w-full px-1">
        <div className="relative py-6">
          <InfiniteSlider speedOnHover={20} speed={40} gap={40}>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/pain.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Pain</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/nasal.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Nasal Congestion</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/saukimeds.jpg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Sauki delivery</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/eyedrop.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Eye drop</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/cold.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Cold & Cough</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/saukimed.jpg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Medicine delivery</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/rashes.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Rashes</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/pharmacy/digestion.jpeg"
                alt=""
                width={150}
                height={150}
                className="rounded-lg"
              />
              <p className="text-white font-semibold">Digestion</p>
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
