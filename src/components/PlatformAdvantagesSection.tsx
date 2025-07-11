import { Language, useTranslation } from "@/lib/i18n";
import { Zap, Globe, Headphones, Smile } from "lucide-react";

interface PlatformAdvantagesSectionProps {
  currentLang: Language;
}

export function PlatformAdvantagesSection({ currentLang }: PlatformAdvantagesSectionProps) {
  const advantages = [
    {
      icon: Zap,
      title: "Licença Flexível",
      description: "Tarifado por obra ativa. Obras concluídas não são cobradas e ficam disponíveis para consulta."
    },
    {
      icon: Globe,
      title: "Acesso Universal",
      description: "Acesse suas obras de qualquer lugar e a qualquer hora. Basta um navegador de internet, sem instalar programas."
    },
    {
      icon: Headphones,
      title: "Suporte Técnico de Verdade",
      description: "Fale com técnicos da área por telefone, chat ou e-mail, sem custos adicionais."
    },
    {
      icon: Smile,
      title: "Amigável e Simples de Usar",
      description: "Telas objetivas e curva de aprendizado suave para toda a equipe."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Uma Plataforma Pensada para Você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O RDOWEB dispensa programas adicionais e oferece flexibilidade total para sua gestão de obras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border text-center group hover:border-primary/30 hover:scale-105"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}