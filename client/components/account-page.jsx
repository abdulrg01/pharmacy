"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserProfile } from "@/lib/api";
import {
  User,
  ShoppingBag,
  Heart,
  LogOut,
  Settings,
  ShoppingBagIcon,
  Users,
  HeartIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import SigninDialog from "./SigninDialog";

export function AccountPage() {
  const [user, setUser] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserProfile();
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      {!user && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Sign in to view your Profile
          </h2>
          <Button onClick={() => setOpenDialog(true)}>Login</Button>
        </div>
      )}

      {user && (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <User className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">{user.user?.name}</h2>
                  <p className="text-gray-500 text-sm">{user.user?.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/account">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/wishlist">
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </a>
                </Button>
                {user && (
                  <a href="/orders">
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      My Orders
                    </Button>
                  </a>
                )}
                {user && user.user?.isAdmin && (
                  <a href="/allorders">
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingBagIcon className="mr-2 h-4 w-4" />
                      Orders
                    </Button>
                  </a>
                )}
                {user && user.user?.isAdmin && (
                  <a href="/allReviews">
                    <Button variant="ghost" className="w-full justify-start">
                      <Heart className="mr-2 h-4 w-4" />
                      Reviews
                    </Button>
                  </a>
                )}
                {user && user.user?.isAdmin && (
                  <a href="/allUsers">
                    <Button variant="ghost" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Users
                    </Button>
                  </a>
                )}
                <Button
                  onClick={() => setAddCommentDialog(true)}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <HeartIcon className="mr-2 h-4 w-4" />
                  Add a Review
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <SigninDialog
        openDialog={openDialog}
        closeDialog={(v) => setOpenDialog(v)}
      />
    </div>
  );
}

{
  /* <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" value="guest@example.com" disabled />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="pt-4">
                <Button>Save Changes</Button>
              </div>
            </form>
          </div>
        </div> */
}
