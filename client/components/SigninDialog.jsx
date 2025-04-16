"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { loginUser, socialAuth } from "@/lib/api";

export default function SigninDialog({ openDialog, closeDialog }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
      );
      const user = userInfo?.data;
      console.log(user);
      const data = await socialAuth({
        name: user.name,
        email: user.email,
        avatar: user.picture,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      window.location.reload();
      closeDialog(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      window.location.reload();
      closeDialog(false);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center gap-3">
              <h2 className="font-bold text-2xl text-center text-white">
                Sauki Delivery
              </h2>
              <p className="mt-2 text-center">
                Zamu kawo maka magani duk inda kake. Yi mana magana ta whatsapp
                dinmu
              </p>
              <Button
                className="bg-blue-500 text-white hover:bg-blue-400 mt-3"
                onClick={googleLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285f4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34a853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#fbbc05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  ></path>
                  <path
                    fill="#eb4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Sign In With Google
              </Button>
              <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <hr className="border-dashed" />
                <span className="text-xs">Or continue With</span>
                <hr className="border-dashed" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-92 m-auto h-fit w-full"
              >
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="block text-sm">
                      Name
                    </Label>
                    <Input
                      type="name"
                      required
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="block text-sm">
                      Email
                    </Label>
                    <Input
                      type="email"
                      required
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="block text-sm">
                      Password
                    </Label>
                    <Input
                      type="password"
                      required
                      name="password"
                      id="password"
                      onChange={handleChange}
                    />
                  </div>

                  <Button className="w-full bg-blue-500 text-white hover:bg-blue-400">Continue</Button>
                </div>
              </form>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
