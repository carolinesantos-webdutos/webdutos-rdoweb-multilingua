import { Language, useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface ContactFormSectionProps {
  currentLang: Language;
}

export function ContactFormSection({ currentLang }: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    objectives: ''
  });

  const positions = [
    "Proprietário, sócio ou diretor",
    "Gerente, superintendente ou coordenador",
    "Engenheiro ou analista",
    "Assistente ou técnico",
    "Consultor",
    "Autônomo",
    "Outros"
  ];

  const objectives = [
    "Melhorar processos e a gestão em minhas obras",
    "Gestão anti pleitos",
    "Implantar uma gestão pró pleito",
    "Eliminar papéis ou reduzir impressões",
    "Controlar minhas obras através de processo padronizado",
    "Criar memória técnica e retroalimentar meu ciclo PDCA",
    "Outros"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apresentação Técnica Online
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha os campos abaixo e um de nossos especialistas entrará em contato para agendar o melhor dia e horário.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Corporativo *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone com WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Nome da Empresa *</Label>
                <Input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Cargo ou função *</Label>
              <Select value={formData.position} onValueChange={(value) => setFormData({ ...formData, position: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu cargo ou função" />
                </SelectTrigger>
                <SelectContent>
                  {positions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">Quais são os seus objetivos? *</Label>
              <Select value={formData.objectives} onValueChange={(value) => setFormData({ ...formData, objectives: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seus objetivos" />
                </SelectTrigger>
                <SelectContent>
                  {objectives.map((objective) => (
                    <SelectItem key={objective} value={objective}>
                      {objective}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-4 text-lg font-semibold"
            >
              Solicitar Demonstração
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                Você também pode falar conosco pelo telefone{" "}
                <a href="tel:+551234136082" className="text-primary hover:underline font-medium">
                  +55 (12) 3413-6082
                </a>{" "}
                ou enviar um e-mail para{" "}
                <a href="mailto:contato@rdoweb.com.br" className="text-primary hover:underline font-medium">
                  contato@rdoweb.com.br
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}