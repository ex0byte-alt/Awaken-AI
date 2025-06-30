import BackgroundPattern from "@/components/LandingPage/Background";
import BusinessOutcomes from "@/components/LandingPage/BusinessSection";
import ContactSection from "@/components/LandingPage/ContactSection";
import FeaturesPage from "@/components/LandingPage/FeatureSection";
import FooterSection from "@/components/LandingPage/FooterSection";
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