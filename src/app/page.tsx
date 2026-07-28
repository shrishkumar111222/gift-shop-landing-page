import { Hero } from "@/components/sections/Hero";
import { Concepts } from "@/components/sections/Concepts";
import { WhyCustom } from "@/components/sections/WhyCustom";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col overflow-x-clip">
        <Hero />
        <Concepts />
        <WhyCustom />
        <Features />
        <Pricing />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
