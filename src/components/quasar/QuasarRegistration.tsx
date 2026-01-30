import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

// --- CONFIGURAÇÃO ---
// ATENÇÃO: Coloque aqui o identificador que aparece na URL principal do evento
// Exemplo: se a URL é even3.com.br/nome-do-evento, coloque "nome-do-evento"
const EVENT_IDENTIFIER = "ii-encontro-quasar-688507"; 

const QuasarRegistration = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Verifica se o script já foi carregado para evitar duplicação
    const scriptId = "even3-widget-script";
    if (document.getElementById(scriptId)) {
        setLoading(false);
        return;
    }

    // 2. Cria o script do Widget da Even3
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.even3.com.br/widget/js?e=${EVENT_IDENTIFIER}&t=ticket&lang=pt`;
    script.async = true;

    // 3. Gerencia o estado de carregamento
    script.onload = () => setLoading(false);
    
    // 4. Adiciona ao corpo do documento
    document.body.appendChild(script);

    // Limpeza (opcional, dependendo de como o Even3 se comporta ao sair da página)
    return () => {
      // Geralmente widgets de terceiros preferem não ser removidos e lidos repetidamente
      // mas se precisar, pode remover o script aqui.
    };
  }, []);

  return (
    <section id="inscricao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Inscrição
            </h2>
            <p className="text-muted-foreground text-lg">
              Garanta sua participação diretamente por aqui. Ambiente seguro Even3.
            </p>
          </div>

          {/* Área do Widget */}
          <div className="relative min-h-[500px] border border-border rounded-xl bg-card overflow-hidden shadow-sm">
            
            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <span className="text-sm text-muted-foreground">Carregando formulário...</span>
                </div>
              </div>
            )}

            {/* O ID deve ser EXATAMENTE este para o script do Even3 encontrar a div */}
            <div id="even3-widget-ticket"></div>
            
          </div>

          <div className="mt-4 text-center">
             <p className="text-xs text-muted-foreground">
               Caso o formulário não carregue, verifique se você possui bloqueadores de anúncios ativos.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuasarRegistration;