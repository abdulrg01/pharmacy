"use client";
import { AnimatedGuideIcon } from "@/components/animated-guid-icon";
import { MobileFooterNav } from "@/components/mobile-footer-nav";
import { Navbar } from "@/components/Navbar";
import { WhatsappButton } from "@/components/whatsapp-button";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function GoogleProvider({ children }) {
  return (
    <div>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <AnimatedGuideIcon />
          <WhatsappButton />
          <MobileFooterNav />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}
