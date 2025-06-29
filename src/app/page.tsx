import BackgroundPattern from "@/components/back-ground";
import BusinessOutcomes from "@/components/LandingPage/Business/business";
import ContactSection from "@/components/LandingPage/ContactSection.tsx/ContactSection";
import FeaturesPage from "@/components/LandingPage/Features/feature";
import FooterSection from "@/components/LandingPage/FooterSection/FooterSection";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import Navbar from "@/components/LandingPage/Navbar/navbar";
import PricingSection from "@/components/LandingPage/Pricing/PricingSection";
import { TestimonialSection } from "@/components/LandingPage/Testimonials/TestimonialSection";

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