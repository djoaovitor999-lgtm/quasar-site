import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2, Ticket } from "lucide-react"; // Ticket adicionado aqui

// --- CONFIGURAÇÃO DO EVEN3 ---
const EVENT_CODE = "ii-encontro-quasar-688507"; 
const WIDGET_TYPE = "ticket"; 

const QuasarRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Timer para verificar se o widget realmente carregou visualmente
    // Isso resolve o problema da "tela cinza"
    const safetyTimer = setTimeout(() => {
      const widget = document.getElementById(`even3-widget-${WIDGET_TYPE}`);
      
      // Se o widget não existe, está vazio ou tem altura muito pequena (não renderizou iframe)
      if (!widget || widget.clientHeight < 50 || widget.children.length === 0) {
        console.warn("Widget Even3 demorou muito ou falhou na renderização visual.");
        setShowFallback(true);
        setIsLoading(false);
      }
    }, 4000); // Espera 4 segundos antes de desistir e mostrar o botão

    const loadEven3Widget = () => {
      try {
        // Verifica se script já existe para não duplicar
        if (document.getElementById("even3-script")) return;

        const script = document.createElement("script");
        script.id = "even3-script";
        script.src = `https://www.even3.com.br/widget/js?e=${EVENT_CODE}&t=${WIDGET_TYPE}&lang=pt`;
        script.async = true;
        
        script.onload = () => {
          // O script carregou, mas ainda esperamos o safetyTimer verificar se renderizou visualmente
          setIsLoading(false);
        };

        script.onerror = () => {
          console.error("Erro ao carregar script do Even3");
          setShowFallback(true);
          setIsLoading(false);
        };

        document.body.appendChild(script);
      } catch (error) {
        console.error("Erro na integração Even3:", error);
        setShowFallback(true);
        setIsLoading(false);
      }
    };

    // Pequeno delay inicial para garantir que o DOM está pronto
    const initTimer = setTimeout(loadEven3Widget, 100);

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(initTimer);
      // Opcional: Remover o script ao desmontar se causar problemas de navegação
      // const script = document.getElementById("even3-script");
      // if (script) document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="inscricao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Inscrição
            </h2>
            <p className="text-muted-foreground">
              Registre seu interesse em participar do II Encontro Quasar.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm min-h-[400px] relative transition-all duration-300">
            
            {/* Loading State */}
            {isLoading && !showFallback && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 z-10">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Carregando formulário...</p>
              </div>
            )}

            {/* Container do Widget - Oculta se tiver erro para não mostrar o quadrado cinza */}
            <div 
              id={`even3-widget-${WIDGET_TYPE}`} 
              className={`w-full ${showFallback ? "hidden" : "block"}`}
            ></div>

            {/* Fallback - Botão para Link Direto */}
            {showFallback && (
              <div className="flex flex-col items-center justify-center h-[400px] p-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <Ticket className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Inscrição Disponível</h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Para garantir a melhor experiência e segurança, acesse o formulário de inscrição diretamente na plataforma oficial.
                </p>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#009CA6] hover:bg-[#007F87] text-white font-semibold h-12 px-8 text-base shadow-md hover:shadow-lg transition-all"
                >
                  <a 
                    href="https://www.even3.com.br/tickets/get/ii-encontro-quasar-688507?even3_orig=get_tickets"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Inscrever-se no Even3
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            )}
            
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Ambiente seguro processado por Even3. Seus dados estão protegidos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuasarRegistration;