import { useState } from "react";
import { Menu, X, Globe, Check } from "lucide-react";
import logoQuasar from "@/assets/logo-quasar-branca.png";
import logoQuasarPreta from "@/assets/logo-quasar-preta.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface QuasarNavigationProps {
  isHeroVisible?: boolean;
}

const QuasarNavigation = ({ isHeroVisible = true }: QuasarNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("PT");

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#palestrantes", label: "Palestrantes" },
    { href: "#programacao", label: "Programação" },
    { href: "#local", label: "Local" },
    { href: "#inscricao", label: "Inscrição" },
  ];

  const languages = [
    { code: "PT", label: "Português" },
    { code: "EN", label: "English" },
    { code: "ES", label: "Español" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      // Ajuste o offset para descontar a altura da navbar fixa (aprox 80px)
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Fecha o menu mobile ao clicar
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHeroVisible ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={isHeroVisible ? logoQuasar : logoQuasarPreta} 
            alt="Quasar" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isHeroVisible 
                  ? "text-white/90 hover:text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language Selector (Desktop) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 outline-none ${
                  isHeroVisible 
                    ? "text-white/90 hover:text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className="cursor-pointer flex justify-between items-center min-w-[120px]"
                >
                  {lang.label}
                  {currentLang === lang.code && <Check className="h-4 w-4 ml-2" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isHeroVisible ? "text-white" : "text-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isHeroVisible ? "text-white" : "text-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector (Mobile) */}
            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
                <Globe className="h-4 w-4" />
                <span>Idioma</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      // Opcional: fechar o menu ao selecionar
                      // setIsMenuOpen(false); 
                    }}
                    className={`text-sm py-2 px-3 rounded-md border transition-all ${
                      currentLang === lang.code
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-input hover:bg-accent"
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default QuasarNavigation;