import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

export function DrugCard({ drug }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-40 w-full bg-gray-100">
          <Image
            src={drug.image || "/placeholder.svg"}
            alt={drug.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2">
          {drug.category}
        </Badge>
        <h3 className="font-semibold text-lg mb-1">{drug.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{drug.description}</p>
        <p className="font-bold text-green-600">${drug.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-[#035e85]">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
