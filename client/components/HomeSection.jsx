import AnimatedBurger from "./animated-burger";
import Logos from "./Logos";

export default function HomeSection() {
  return (
    <div className="py-3 flex flex-col">
      <div className="bg-[#035e85] flex-1 pb-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center mt-10">
            <AnimatedBurger />
          </div>
          <div className="w-full md:w-1/2 space-y-5 -mt-20 md:mt-0">
            <h1 className="text-5xl md:text-6xl max-sm:text-center font-bold text-white">
              Sauki delivery
            </h1>
            <p className="text-xl max-sm:text-center text-white">
              Lafiyarku, Jarinmu. <br />
              Zamu kawo maka magani duk inda kake. Yi mana magana ta whatsApp
              dinmu
            </p>
            <Logos />
          </div>
        </div>
      </div>
    </div>
  );
}
