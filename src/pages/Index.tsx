import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { PlatformAdvantagesSection } from "@/components/PlatformAdvantagesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Language } from "@/lib/i18n";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('pt');

  return (
    <div className="min-h-screen">
      <HeroSection currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <FeaturesSection currentLang={currentLang} />
      <DifferentialsSection currentLang={currentLang} />
      <PlatformAdvantagesSection currentLang={currentLang} />
      <TestimonialsSection currentLang={currentLang} />
      <ContactFormSection currentLang={currentLang} />
      <AboutSection currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
