import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import heroImage from "@/assets/hero-construction.jpg";

interface HeroSectionProps {
  currentLang: Language;
}

export function HeroSection({ currentLang }: HeroSectionProps) {
  const t = useTranslation(currentLang);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.7), rgba(33, 41, 60, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              {t.hero.contactUs}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              {t.hero.watchVideo}
            </Button>
          </div>
        </div>
      </div>

      {/* Social Media Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4">
        <div className="text-white text-sm writing-mode-vertical transform rotate-180 mb-4">
          Follow Us
        </div>
        <div className="w-px h-12 bg-white/30"></div>
        {/* Social icons would go here */}
      </div>

      {/* Scroll indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </section>
  );
}