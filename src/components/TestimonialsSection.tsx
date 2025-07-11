import { Language, useTranslation } from "@/lib/i18n";
import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  currentLang: Language;
}

export function TestimonialsSection({ currentLang }: TestimonialsSectionProps) {
  const testimonials = [
    {
      name: "Carlos Eduardo Santos",
      role: "Diretor de Engenharia",
      company: "Construtora Millennium",
      testimonial: "O RDOWEB revolucionou nossa gestão de obras. Conseguimos reduzir em 40% o tempo gasto com relatórios e aumentar significativamente a transparência com nossos clientes.",
      rating: 5
    },
    {
      name: "Marina Oliveira",
      role: "Gerente de Projetos",
      company: "Engenharia & Construção SA",
      testimonial: "A plataforma é intuitiva e o suporte técnico é excepcional. Implementamos em todas as nossas obras ativas e os resultados foram imediatos.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      role: "Engenheiro Civil",
      company: "Obras e Planejamento LTDA",
      testimonial: "Finalmente uma solução que entende as necessidades reais do canteiro de obras. O RDO digital facilitou muito nossa comunicação com fiscalizadores.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas de construção confiam no RDOWEB para otimizar suas operações e melhorar a gestão de obras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border relative group hover:border-primary/30"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/30 transition-colors" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}