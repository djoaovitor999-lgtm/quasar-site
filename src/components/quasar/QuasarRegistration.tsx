import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";

// --- CONFIGURAÇÃO DO EVEN3 ---
const EVENT_CODE = "ii-encontro-quasar-688507"; 
const EVENT_URL = `https://www.even3.com.br/${EVENT_CODE}`;

const QuasarRegistration = () => {
  const [isLoading, setIsLoading] = useState(true);

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

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm min-h-[600px] relative">
            
            {/* Estado de Carregamento */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Carregando formulário de inscrição...</p>
              </div>
            )}

            {/* iFrame do Even3 */}
            <iframe 
              src={EVENT_URL}
              title="Inscrição II Encontro Quasar"
              className="w-full h-[800px] border-0"
              onLoad={() => setIsLoading(false)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* Link alternativo caso o iframe falhe ou para mobile com tela muito pequena */}
            <div className="bg-muted/30 p-4 text-center border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Está tendo problemas para visualizar o formulário acima?
              </p>
              <Button asChild variant="outline" size="sm">
                <a 
                  href={EVENT_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Abrir em nova janela
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
            
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