"use client";

import { useRouter } from "next/navigation";
import { Pill } from "lucide-react";
import { motion } from "framer-motion";

export function AnimatedGuideIcon() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/drug-stores");
  };

  return (
    <motion.div
      className="md:hidden"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative bg-green-600 text-white p-2 rounded-full shadow-lg cursor-pointer flex items-center"
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
        <Pill className="h-4 w-4" />
      </motion.div>
    </motion.div>
  );
}
