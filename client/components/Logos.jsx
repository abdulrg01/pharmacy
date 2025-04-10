import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

export default function Logos() {
  return (
    <section className="bg-white w-full flex items-center justify-center overflow-hidden">
      <div className="group relative w-full px-6">
        <div className="relative py-6">
          <InfiniteSlider speedOnHover={20} speed={40} gap={40}>
            <div className="flex">
              <Image src="/pharmacy/pain.jpeg" alt="" width={150} height={150} />
            </div>
            <div className="flex">
              <Image
                src="/pharmacy/rashes.jpeg"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="flex">
              <Image src="/pharmacy/pain.jpeg" alt="" width={150} height={150} />
            </div>
            <div className="flex">
              <Image
                src="/pharmacy/digestion.jpeg"
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className="flex">
              <Image src="/pharmacy/pain.jpeg" alt="" width={150} height={150} />
            </div>
            <div className="flex">
              <Image src="/pharmacy/pain.jpeg" alt="" width={150} height={150} />
            </div>
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
