"use client";
import { getAllReviews } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

export default function AllReviews() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const reviewsData = await getAllReviews();
        console.log("Allreviews:", reviewsData);
        setReviews(reviewsData);
      } catch (error) {
        console.log("Review fetch error:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center md:flex-row flex-col mb-8">
        <Link href="/">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">All reviews</h1>
      </div>

      {reviews?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No reviews Yet</h2>
        </div>
      ) : (
        <div className="space-y-8">
          {reviews?.map((review) => (
            <div key={review._id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Review ID: {review._id}
                    </p>
                    <p className="text-sm text-gray-500">
                      Date: {review.createdAt}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold mb-4">Users Review</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium">{review.user.name}</h4>
                    <p className="text-sm text-gray-500">{review.user.email}</p>
                  </div>
                </div>
                <div className="py-5">
                  <p className="text-base text-blue-950">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
