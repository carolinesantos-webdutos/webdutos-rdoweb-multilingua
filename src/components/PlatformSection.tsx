import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import tunnelImage from "@/assets/tunnel-construction.jpg";

interface PlatformSectionProps {
  currentLang: Language;
}

export function PlatformSection({ currentLang }: PlatformSectionProps) {
  const t = useTranslation(currentLang);

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.8)), url(${tunnelImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t.platform.title}
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t.platform.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              {t.platform.requestDemo}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              {t.platform.watchDemo}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div className="w-3 h-3 rounded-full bg-white/30"></div>
      </div>
    </section>
  );
}