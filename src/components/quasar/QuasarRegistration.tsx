import { useEffect } from "react";

const QuasarRegistration = () => {
  
  useEffect(() => {
    // --- CONFIGURAÇÃO DO WIDGET ---
    // 1. Cole aqui a URL que está no 'src' do script que a Even3 forneceu
    const scriptUrl = "https://www.even3.com.br/widget/js?e=ii-encontro-quasar-688507&t=ticket&lang=pt"; 
    // DICA: O parâmetro 'e=' deve ser o link do seu evento (ii-encontro-quasar)
    // O parâmetro 't=' define o tipo. Para inscrição, geralmente é 'ticket' ou 'registration'.
    // Se o seu código da Even3 for diferente, substitua a URL acima inteira.

    // Verifica se o script já existe para evitar duplicidade
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Limpeza opcional: remove o script ao sair da página
        // document.body.removeChild(script); 
      };
    }
  }, []);

  return (
    <section id="inscricao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Garanta sua Vaga
            </h2>
            <p className="text-muted-foreground">
              Registre seu interesse em participar do II Encontro Quasar.
            </p>
          </div>

          {/* Área do Widget */}
          <div className="bg-card border border-border rounded-xl p-4 md:p-8 shadow-sm min-h-[400px]">
            {/* IMPORTANTE: O ID abaixo deve ser IGUAL ao que está na <div> do código da Even3.
              Geralmente é "even3-widget-ticket" ou "even3-widget-registration".
              Se não aparecer nada, verifique este ID no painel da Even3.
            */}
            <div id="even3-widget-ticket"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default QuasarRegistration;