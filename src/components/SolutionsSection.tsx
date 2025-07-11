import { Card, CardContent } from "@/components/ui/card";
import { 
  HardHat, 
  Building2, 
  Ruler, 
  User,
  BarChart3,
  Heart,
  Users,
  Globe 
} from "lucide-react";
import { Language, useTranslation } from "@/lib/i18n";
import expertWorkerImage from "@/assets/expert-worker.jpg";

interface SolutionsSectionProps {
  currentLang: Language;
}

export function SolutionsSection({ currentLang }: SolutionsSectionProps) {
  const t = useTranslation(currentLang);

  const features = [
    {
      icon: HardHat,
      key: 'expertWorker',
      highlighted: true
    },
    {
      icon: Building2,
      key: 'bestQuality'
    },
    {
      icon: Ruler,
      key: 'bestDesign'
    },
    {
      icon: User,
      key: 'individual'
    }
  ];

  const stats = [
    {
      icon: BarChart3,
      number: "745",
      key: 'projectsDone'
    },
    {
      icon: Heart,
      number: "416",
      key: 'happyClients'
    },
    {
      icon: Users,
      number: "154",
      key: 'workersEmployed'
    },
    {
      icon: Globe,
      number: "26",
      key: 'worldwideBranches'
    }
  ];

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-px bg-primary mr-3"></div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                {t.solutions.subtitle}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.solutions.title}
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t.solutions.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={feature.key}
                    className={`${
                      feature.highlighted 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-white/10 text-white border-white/20'
                    } backdrop-blur-sm`}
                  >
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 mb-4" />
                      <h3 className="font-semibold">
                        {t.solutions[feature.key as keyof typeof t.solutions]}
                      </h3>
                      <p className="text-sm mt-2 opacity-90">
                        Construction companies a duty establish a safe work.
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div 
              className="h-96 lg:h-[500px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${expertWorkerImage})` }}
            ></div>
            
            {/* Diagonal overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.key}>
                  <Icon className="h-8 w-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.number}+</div>
                  <div className="text-sm">
                    {t.solutions[stat.key as keyof typeof t.solutions]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}