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
              Sauki delivery
            </h1>
            <p className="text-xl max-sm:text-center text-white">
              Zamu kawo muku magani har gida a funtua. Yi mana magana ta whatsap
              dinmu
            </p>
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
}
