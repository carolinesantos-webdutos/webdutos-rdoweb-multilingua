import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hammer, 
  Building, 
  Palette, 
  Sofa, 
  PaintBucket, 
  Wrench,
  ArrowRight 
} from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import tunnelImage from "@/assets/tunnel-construction.jpg";

interface ServicesSectionProps {
  currentLang: Language;
}

export function ServicesSection({ currentLang }: ServicesSectionProps) {
  const t = useTranslation(currentLang);

  const services = [
    {
      icon: Hammer,
      key: 'landCleaning',
      background: 'bg-secondary'
    },
    {
      icon: Building,
      key: 'construction',
      background: 'bg-secondary',
      image: tunnelImage
    },
    {
      icon: Palette,
      key: 'architecture',
      background: 'bg-secondary'
    },
    {
      icon: Sofa,
      key: 'interior',
      background: 'bg-secondary'
    },
    {
      icon: PaintBucket,
      key: 'paint',
      background: 'bg-secondary'
    },
    {
      icon: Wrench,
      key: 'renovation',
      background: 'bg-secondary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-px bg-primary mr-3"></div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              {t.services.subtitle}
            </span>
            <div className="w-8 h-px bg-primary ml-3"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {t.services.title}
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData = t.services[service.key as keyof typeof t.services] as {
              title: string;
              description: string;
            };
            
            return (
              <Card 
                key={service.key} 
                className={`${service.background} text-white overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                style={service.image ? {
                  backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.8)), url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : {}}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">
                    {serviceData.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {serviceData.description}
                  </p>
                  
                  <Button 
                    variant="link" 
                    className="text-white hover:text-primary p-0 h-auto font-medium group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}