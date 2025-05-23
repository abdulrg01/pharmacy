import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero-section" className="relative h-[250px] w-full">
        <div className="absolute inset-0 bg-black/40"></div>
        <Image
          src="/pharmacy/aboutbg.jpg"
          alt="Pharmacy Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-4 md:text-5xl text-4xl font-bold px-3 text-[#0692cd] whitespace-nowrap">
            Sauki Drug Stores
          </h1>
          <div className="flex items-center gap-1 text-lg">
            <Link href="/drug-stores" className="hover:underline">
              Stores
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#7b1fa2]">Drug Stores</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-blue-950">
            Sauki delivery
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            Lafiyarku, Jarinmu. <br /> Zamu kawo maka magani duk inda kake. Yi
            mana magana ta whatsap dinmu
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-3xl">
            <div className="h-12 rounded-t-lg bg-[#0692cd]"></div>
            {/* Additional search content would go here */}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-6 pb-20">
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            SaukiStore is a leading online pharmacy dedicated to providing
            high-quality healthcare products and medications to our customers.
            Founded in 2010, we have grown to become one of the most trusted
            names in online pharmaceutical retail.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            Sauki delivery Lafiyarku, Jarinmu. <br /> Zamu kawo maka magani duk
            inda kake. Yi mana magana ta whatsap dinmu <br /> Our mission is to
            make healthcare accessible to everyone by providing affordable
            medications, exceptional customer service, and reliable health
            information. We believe that everyone deserves access to the
            medications they need to live healthy lives.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Quality:</strong> We source our products from reputable
              manufacturers and maintain strict quality control.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency in all our business practices.
            </li>
            <li>
              <strong>Customer Focus:</strong> We put our customers first and
              strive to exceed their expectations.
            </li>
            <li>
              <strong>Innovation:</strong> We continuously improve our services
              to provide the best online pharmacy experience.
            </li>
            <li>
              <strong>Accessibility:</strong> We work to make medications
              affordable and available to all who need them.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p>
            Our team consists of licensed pharmacists, healthcare professionals,
            and customer service experts who are dedicated to providing you with
            the best possible service. Our pharmacists are available to answer
            your questions about medications and provide guidance on their
            proper use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p>At SaukiStore, we are committed to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Providing accurate information about medications and health
              products
            </li>
            <li>
              Ensuring the privacy and security of your personal information
            </li>
            <li>Delivering your orders promptly and in perfect condition</li>
            <li>Offering competitive prices on all our products</li>
            <li>
              Supporting our community through health education and outreach
              programs
            </li>
          </ul>

          <p className="mt-8">
            Thank you for choosing SaukiStore for your healthcare needs. We look
            forward to serving you and contributing to your health and
            wellbeing.
          </p>
        </div>
      </div>
    </div>
  );
}
