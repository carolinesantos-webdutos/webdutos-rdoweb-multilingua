import { Language, useTranslation } from "@/lib/i18n";
import { CheckCircle, BarChart3, MessageSquare } from "lucide-react";

interface DifferentialsSectionProps {
  currentLang: Language;
}

export function DifferentialsSection({ currentLang }: DifferentialsSectionProps) {
  const differentials = [
    {
      icon: CheckCircle,
      title: "Padronização",
      description: "Informações coletadas de forma padronizada e registradas em RDO aderente à resolução 1094/CONFEA."
    },
    {
      icon: BarChart3,
      title: "Acompanhamento",
      description: "Dashboards, indicadores e gráficos gerados automaticamente a partir dos apontamentos de campo."
    },
    {
      icon: MessageSquare,
      title: "Comunicação",
      description: "Canal online interativo entre Obra, Fiscalização e Cliente para antecipar problemas e tomar decisões assertivas."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Diferenciais que Colocam sua Obra em Outro Nível
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indicado para empresas que querem otimizar processos e controlar obras através de apontamentos de campo padronizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border text-center group hover:border-primary/30"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <differential.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {differential.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}