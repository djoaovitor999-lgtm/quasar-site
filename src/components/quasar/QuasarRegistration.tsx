import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2, AlertCircle } from "lucide-react";

// --- CONFIGURAÇÃO DO LINK ---
// Tente usar apenas o nome do evento, sem o código numérico final.
// Se não funcionar, copie o link exato do seu evento no painel do Even3 e cole abaixo.
const EVENT_SLUG = "ii-encontro-quasar"; 
const EVENT_URL = `https://www.even3.com.br/tickets/get/ii-encontro-quasar-688507?even3_orig=get_tickets`;

const QuasarRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Função chamada se o iframe falhar ao carregar (ex: bloqueio de segurança)
  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

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

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm min-h-[700px] relative">
            
            {/* Estado de Carregamento */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Carregando formulário de inscrição...</p>
              </div>
            )}

            {/* Mensagem de Erro / Fallback */}
            {hasError ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
                <AlertCircle className="h-12 w-12 text-destructive mb-2" />
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Não foi possível carregar o formulário aqui</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    A plataforma de inscrições pode ter recusado a conexão dentro do site. 
                    Por favor, acesse diretamente pela página oficial.
                  </p>
                </div>
                <Button asChild size="lg" className="mt-4">
                  <a 
                    href={EVENT_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Inscrever-se na Página Oficial
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            ) : (
              /* iFrame do Even3 */
              <iframe 
                src={EVENT_URL}
                title="Inscrição II Encontro Quasar"
                className="w-full h-[800px] border-0"
                onLoad={() => setIsLoading(false)}
                onError={handleIframeError}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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