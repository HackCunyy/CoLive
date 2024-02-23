import Image from "next/image";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { createClient } from "@/utils/supabase/client";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import FeaturesBlocks from "@/components/ui/features-blocks";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center min-w-screen overflow-hidden p-4">
      <div className="flex flex-col items-center w-[380px] h-screen pb-4">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
