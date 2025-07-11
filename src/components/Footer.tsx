import { Language, useTranslation } from "@/lib/i18n";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  currentLang: Language;
}

export function Footer({ currentLang }: FooterProps) {
  const t = useTranslation(currentLang);

  return (
    <footer id="contact" className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-primary-foreground rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-primary">WEBDUTOS</span>
            </div>
            <p className="text-gray-300 mb-6">
              {currentLang === 'pt' 
                ? "Soluções em software para gestão de projetos de engenharia e construção."
                : currentLang === 'en'
                ? "Software solutions for engineering project and construction management."
                : "Soluciones de software para gestión de proyectos de ingeniería y construcción."
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.nav.home}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">{t.nav.services}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-primary transition-colors">{t.nav.projects}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.nav.services}</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">RDOWEB</span></li>
              <li><span className="text-gray-300">PipeControl</span></li>
              <li><span className="text-gray-300">Quality Control</span></li>
              <li><span className="text-gray-300">Engineering Management</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.nav.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">+55 (11) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">contato@webdutos.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Webdutos. 
            {currentLang === 'pt' 
              ? " Todos os direitos reservados."
              : currentLang === 'en'
              ? " All rights reserved."
              : " Todos los derechos reservados."
            }
          </p>
        </div>
      </div>
    </footer>
  );
}