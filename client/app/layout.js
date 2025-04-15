import { Inter } from "next/font/google";
import { Providers } from "@/lib/store/providers";
import "./globals.css";
import GoogleProvider from "./GoogleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sauki SaukiStore - Your Health, Our Priority",
  description:
    "Find the medicines you need with our extensive collection of quality healthcare products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GoogleProvider>{children}</GoogleProvider>
        </Providers>
      </body>
    </html>
  );
}
