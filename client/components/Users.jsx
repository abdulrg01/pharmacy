"use client";
import { getAllUsers } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function Users() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        console.log("Allusers:", usersData);
        setUsers(usersData);
      } catch (error) {
        console.log("Order fetch error:", error);
      }
    };

    fetchUsers();
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
        <h1 className="text-3xl font-bold">All Users</h1>
      </div>

      {users?.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">No Users Yet</h2>
        </div>
      ) : (
        <div className="space-y-8">
          {users?.map((user) => (
            <ul
              key={user._id}
              className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="shrink-0">
                    <Image
                      className="w-8 h-8 rounded-full object-contain"
                      src={user?.avatar}
                      alt={user.name}
                      fill
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    View
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}
