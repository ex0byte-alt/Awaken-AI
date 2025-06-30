import BackgroundPattern from "@/components/Background";
import BusinessOutcomes from "@/components/LandingPage/Business/business";
import ContactSection from "@/components/LandingPage/ContactSection.tsx/ContactSection";
import FeaturesPage from "@/components/LandingPage/Features/feature";
import FooterSection from "@/components/LandingPage/FooterSection/FooterSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import Navbar from "@/components/LandingPage/Navbar";
import PricingSection from "@/components/LandingPage/PricingSection";
import { TestimonialSection } from "@/components/LandingPage/TestimonialSection";

export default function Home() {
  return (
    <div>
      <BackgroundPattern>
        <Navbar />
        <HeroSection />
        <TestimonialSection />
        <FeaturesPage />
        <BusinessOutcomes />
        <PricingSection />
        <ContactSection />
      </BackgroundPattern>
      <FooterSection />

    </div>
  );
}