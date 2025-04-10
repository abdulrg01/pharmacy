"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const burgerImages = [
  "/pharmacy/emzor1.png",
  "/pharmacy/emzor3.png",
  "/pharmacy/polic1.png",
  "/pharmacy/polic2.png",
]

export default function AnimatedBurger() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Timer to handle the image cycling
    const intervalId = setInterval(() => {
      // First fade out
      setIsVisible(false)

      // After fading out, change the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % burgerImages.length)
        // Then fade in the new image
        setIsVisible(true)
      }, 500) // This should match the CSS transition duration
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [])

  return (
    <div className="relative w-64 h-96">
      <div className={`absolute inset-0 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <Image
          src={burgerImages[currentImageIndex] || "/placeholder.svg"}
          alt="Exploded burger with ingredients"
          width={300}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}
