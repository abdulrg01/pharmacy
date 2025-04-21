"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ShoppingCart, PlusCircle, MinusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { addToCart, removeFromCart, selectCartItemQuantity } from "@/lib/store/cartSlice"

export function DrugCard({ drug }) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const quantity = useAppSelector((state) => selectCartItemQuantity(state, drug.id))

  const handleCardClick = () => {
    router.push(`/drug/${drug.id}`)
  }

  const handleButtonClick = (e, action) => {
    e.stopPropagation()
    action()
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer" onClick={handleCardClick}>
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-gray-100">
          <Image src={drug.image || "/placeholder.svg"} alt={drug.name} fill className="object-contain p-4" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge className="mb-2 bg-[#035e85] text-gray-100">
          {drug.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-1">{drug.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{drug.description}</p>
        <p className="font-bold text-green-600">N{drug.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {quantity === 0 ? (
          <Button className="w-full bg-[#035e85]" onClick={(e) => handleButtonClick(e, () => dispatch(addToCart(drug.id)))}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => handleButtonClick(e, () => dispatch(removeFromCart(drug.id)))}
            >
              <MinusCircle className="h-4 w-4" />
            </Button>
            <span className="font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={(e) => handleButtonClick(e, () => dispatch(addToCart(drug.id)))}
            >
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

