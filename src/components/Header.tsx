import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Language, useTranslation } from "@/lib/i18n";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation(currentLang);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-primary-foreground rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-primary">WEBDUTOS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open('https://webdutos.com/autolink/', '_blank')}
            >
              Login RDOWEB
            </Button>
            <Button className="bg-primary hover:bg-primary-dark">
              {t.nav.getQuote}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-primary hover:bg-primary-dark">
                  {t.nav.getQuote}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}