import { Language, useTranslation } from "@/lib/i18n";
import { Users, Activity, Truck, AlertTriangle, CloudRain, Shield, Wrench } from "lucide-react";

interface FeaturesSectionProps {
  currentLang: Language;
}

export function FeaturesSection({ currentLang }: FeaturesSectionProps) {
  const features = [
    {
      icon: Users,
      title: "Mão de Obra",
      description: "Controle presença, absenteísmo e produtividade por equipe. Gere relatórios automáticos de homem/hora e controle o efetivo de subcontratadas."
    },
    {
      icon: Activity,
      title: "Atividades Produtivas",
      description: "Integre o cronograma e a EAP da obra. Acompanhe o avanço físico e tome decisões com base em informações padronizadas do \"planejado vs. realizado\"."
    },
    {
      icon: Truck,
      title: "Equipamentos",
      description: "Registre o uso de equipamentos em RDO, controle a mobilização e desmobilização e gere inventários, histogramas e relatórios de uso."
    },
    {
      icon: AlertTriangle,
      title: "Ocorrências e Fatos Relevantes",
      description: "Crie um fluxo de informações padronizado, controlando réplicas e tréplicas com registros fotográficos e de arquivos. Localize qualquer evento rapidamente."
    },
    {
      icon: Wrench,
      title: "Paralisações e Interferências",
      description: "Registre horas paradas e cruze interferências com equipes e atividades para mensurar o impacto real na produção, custos e prazos."
    },
    {
      icon: CloudRain,
      title: "Clima",
      description: "Registre dados de pluviometria, vento e temperatura de forma semiautomática e compare com a média histórica da região."
    },
    {
      icon: Shield,
      title: "Acidentes",
      description: "Faça o registro de acidentes com e sem afastamento, anexe a CAT e componha o quadro de indicadores de segurança da obra."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Principais Recursos para uma Gestão de Obras Eficiente
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O RDOWEB transforma apontamentos de campos em indicadores de acompanhamento, trazendo transparência e confiabilidade às informações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}