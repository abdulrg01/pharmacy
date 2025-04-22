import Link from "next/link";
import AnimatedBurger from "./animated-burger";
import Logos from "./Logos";

export default function HomeSection() {
  return (
    <div className="py-5 flex flex-col">
      <div className="bg-[#035e85] flex-1">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center pt-14">
            <AnimatedBurger />
          </div>
          <div className="w-full md:w-1/2 space-y-2 -mt-20 md:mt-0">
            <h1 className="text-5xl md:text-6xl max-sm:text-center font-bold text-white">
              MediStore
            </h1>
            <p className="text-xl max-sm:text-center text-white">
              Zamu kawo muku magani har gida a funtua. Yi mana magana ta whatsap
              dinmu
            </p>
            <Logos />
          </div>
        </div>
      </div>

      {/* Category Icons Section */}
      <div className="container mx-auto md:px-24 px-2 py-4">
        <h2 className="text-xl font-bold text-blue-950 mb-6">
          FEATURED CATEGORIES
        </h2>
        <div className="md:grid grid-cols-3 md:grid-cols-6 gap-4 hidden">
          {[
            { name: "Painkillers", icon: "💊", color: "bg-green-50" },
            { name: "Antibiotics", icon: "🧪", color: "bg-pink-50" },
            { name: "Vitamins", icon: "🍊", color: "bg-purple-50" },
            { name: "Allergy", icon: "🌿", color: "bg-blue-50" },
            { name: "Digestive", icon: "🧠", color: "bg-yellow-50" },
            { name: "First Aid", icon: "🩹", color: "bg-red-50" },
          ].map((category, index) => (
            <Link
              href="/drug-stores"
              key={index}
              className="flex flex-col items-center"
            >
              <div
                className={`${category.color} w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-2`}
              >
                {category.icon}
              </div>
              <span className="font-semibold text-blue-950 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 md:hidden">
          {[
            { name: "Painkillers", icon: "💊", color: "bg-green-50" },
            { name: "Antibiotics", icon: "🧪", color: "bg-pink-50" },
            { name: "Vitamins", icon: "🍊", color: "bg-purple-50" },
            { name: "Allergy", icon: "🌿", color: "bg-blue-50" },
          ].map((category, index) => (
            <Link
              href="/drug-stores"
              key={index}
              className="flex flex-col items-center"
            >
              <div
                className={`${category.color} w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-2`}
              >
                {category.icon}
              </div>
              <span className="font-semibold text-blue-950 text-center">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
