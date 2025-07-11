import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PlatformSection } from "@/components/PlatformSection";
import { Footer } from "@/components/Footer";
import { Language } from "@/lib/i18n";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<Language>('pt');

  return (
    <div className="min-h-screen">
      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <HeroSection currentLang={currentLang} />
      <AboutSection currentLang={currentLang} />
      <ServicesSection currentLang={currentLang} />
      <SolutionsSection currentLang={currentLang} />
      <ProjectsSection currentLang={currentLang} />
      <PlatformSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;
