"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { addComment } from "@/lib/api";

export default function AddComment({ addCommentDialog, closeCommentDialog }) {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addComment(comment);
      console.log(data);
      alert("Thanks for the review");
      closeCommentDialog(false);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Dialog open={addCommentDialog} onOpenChange={closeCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="font-bold text-2xl text-center text-white">
                Add a Review
              </h2>
              <p className="mt-2 text-center">
                Idan kabamu katin acibiti mun kawo maka magani kada kayarda
                kwalin katabbatar kaba likita katin da maganin da muka kawo maka
                yaduba yagani shin maganin haka yake mungode!
              </p>
              <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <hr className="border-dashed" />
                <span className="text-xs">Sauki Med</span>
                <hr className="border-dashed" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-92 m-auto h-fit w-full"
              >
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="comment" className="block text-sm">
                      Comment
                    </Label>
                    <Input
                      type="text"
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  <Button className="w-full">Continue</Button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
