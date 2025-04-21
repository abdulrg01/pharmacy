"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Pill, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function AnimatedGuideIcon() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if the user has dismissed the icon before
    const dismissed = localStorage.getItem("guideIconDismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show the icon after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Navigate to drug stores page
    router.push("/drug-stores");

    // Hide the icon
    setIsVisible(false);

    // Remember that the user has seen and used the icon
    localStorage.setItem("guideIconDismissed", "true");
    setIsDismissed(true);
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem("guideIconDismissed", "true");
    setIsDismissed(true);
  };
  if (isDismissed || !isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-24 right-4 z-50 md:hidden"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-green-600 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          repeatType: "reverse",
        }}
      >
        <Pill className="h-6 w-6 mr-2" />
        <span className="font-medium">Browse Medicines</span>
        <ChevronRight className="h-5 w-5 ml-1" />

        <button
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
          onClick={handleDismiss}
        >
          ×
        </button>
      </motion.div>

      <motion.div
        className="mt-2 bg-white p-2 rounded-lg shadow-md text-xs text-center"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          repeatType: "reverse",
        }}
      >
        Tap to see our medicines!
      </motion.div>
    </motion.div>
  );
}
