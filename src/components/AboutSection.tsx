import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users } from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import workerImage from "@/assets/worker-portrait.jpg";
import teamImage from "@/assets/team-planning.jpg";

interface AboutSectionProps {
  currentLang: Language;
}

export function AboutSection({ currentLang }: AboutSectionProps) {
  const t = useTranslation(currentLang);

  return (
    <section id="about" className="py-20 bg-construction-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-4 bg-primary rounded"></div>
              <div 
                className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${workerImage})` }}
              ></div>
            </div>
            <div className="pt-8">
              <div 
                className="h-80 bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${teamImage})` }}
              ></div>
              <div className="bg-primary text-primary-foreground p-6 rounded-lg mt-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 mr-2" />
                </div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">{t.about.experience}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-px bg-primary mr-3"></div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                {t.about.subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {t.about.title}
            </h2>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{t.about.qualityControl}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-foreground">{t.about.satisfaction}</span>
              </div>
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              {t.about.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}