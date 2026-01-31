import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const QuasarAbout = () => {
  const { t } = useLanguage();

  // Função simples para renderizar negrito definido como **texto** na string
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-justify">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-8">
            {t.about.title}
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{renderText(t.about.p1)}</p>
            <p>{renderText(t.about.p2)}</p>
            <p>{renderText(t.about.p3)}</p>
            <p>{renderText(t.about.p4)}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuasarAbout;