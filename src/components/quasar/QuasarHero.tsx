import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import estacaoCiencias from "@/assets/estacao-ciencias.jpg";
import logoQuasar from "@/assets/logo-quasar-branca.png";

export const QuasarHero = () => {
  const { t } = useLanguage();

  const handleScroll = () => {
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={estacaoCiencias}
          alt="Estação Cabo Branco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 pt-20 text-center">
        <div className="animate-fade-up space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.dateLocation}
          </div>

          {/* Title Area - Substituindo texto "Quasar" pela Logo */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="drop-shadow-lg">{t.hero.titlePrefix}</span> {/* "II Encontro" */}
            
            <img 
              src={logoQuasar} 
              alt="Quasar" 
              className="h-14 md:h-20 lg:h-24 w-auto object-contain drop-shadow-lg mt-2 md:mt-0"
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-[0_0_30px_-10px_rgba(var(--primary),0.5)] transition-all hover:scale-105"
              onClick={handleScroll}
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="flex flex-col items-center gap-2 text-sm">
          <span>{t.hero.scroll}</span>
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};