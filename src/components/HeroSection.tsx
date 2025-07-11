import { Button } from "@/components/ui/button";
import { Play, Facebook, Instagram, Linkedin } from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import { Header } from "./Header";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function HeroSection({ currentLang, onLanguageChange }: HeroSectionProps) {
  const t = useTranslation(currentLang);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "RDOWEB: Obras Sob Controle",
      subtitle: "Transforme apontamentos de campo em indicadores de performance. Crie Relatórios Diários de Obras (RDO) digitais, com validade jurídica.",
    },
    {
      title: "Gestão Profissional de Obras",
      subtitle: "Estabeleça um canal de comunicação seguro entre construtora, gerenciadora e cliente final com informações padronizadas.",
    },
    {
      title: "Tecnologia de Ponta",
      subtitle: "Plataforma em nuvem com alta disponibilidade, sem necessidade de instalação de programas adicionais.",
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-construction-blue via-construction-blue to-blue-900"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.85), rgba(33, 41, 60, 0.85)), url('/lovable-uploads/0d4e33e3-8df8-47f1-8fe2-49405e740f08.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Header integrado */}
      <Header currentLang={currentLang} onLanguageChange={onLanguageChange} />
      
      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Solicite uma Demonstração
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg backdrop-blur-sm group transition-all duration-300 hover:scale-105"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 group-hover:bg-white/30 transition-colors">
                    <Play className="h-4 w-4 ml-0.5" />
                  </div>
                  Assistir Vídeo
                </Button>
              </div>
            </div>

            {/* Right Content - Construction Workers Image Area */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-construction-blue/20"></div>
              {/* Placeholder for construction workers - will be styled to match reference */}
              <div className="relative h-96 flex items-end justify-end">
                <div className="text-white/50 text-sm">Profissionais qualificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-6">
        <div className="text-white text-sm writing-mode-vertical transform rotate-180 mb-6 opacity-75">
          Follow Us
        </div>
        <div className="w-px h-16 bg-white/30"></div>
        <div className="flex flex-col space-y-4">
          <a href="#" className="text-white/70 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-white/70 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 bg-white/20 rounded-full animate-bounce hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full animate-ping hidden lg:block"></div>
    </section>
  );
}