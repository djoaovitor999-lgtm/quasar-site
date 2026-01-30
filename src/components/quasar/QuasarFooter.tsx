import logoGovernoParaiba from "@/assets/logo-governo-pb.png";
import logoPMJP from "@/assets/logo-pmjp.png";
import logoUFPB from "@/assets/logo-ufpb.png";
import logoQuasar from "@/assets/logo-quasar-branca.png";

const QuasarFooter = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Partners Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          {/* Apoio */}
          <div className="mb-12">
            <p className="text-sm text-background/60 text-center mb-8 tracking-widest uppercase">
              Apoio
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <img 
                src={logoGovernoParaiba} 
                alt="Governo da Paraíba" 
                className="h-12 md:h-16 w-auto opacity-90"
              />
              <img 
                src={logoPMJP} 
                alt="Prefeitura de João Pessoa" 
                className="h-10 md:h-12 w-auto opacity-90"
              />
              <img 
                src={logoUFPB} 
                alt="UFPB" 
                className="h-14 md:h-20 w-auto opacity-90"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-background/20 mx-auto mb-12" />

          {/* Realização */}
          <div>
            <p className="text-sm text-background/60 text-center mb-8 tracking-widest uppercase">
              Realização
            </p>
            <div className="flex justify-center">
              <img 
                src={logoQuasar} 
                alt="Quasar" 
                className="h-16 md:h-20 w-auto opacity-90"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10 py-6">
        <div className="container mx-auto px-6">
          <p className="text-sm text-background/40 text-center">
            © 2026 II Encontro Quasar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuasarFooter;
