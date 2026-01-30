const QuasarAbout = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Sobre o Evento
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              O II Encontro Quasar marca a <strong className="text-foreground">inauguração do Centro Internacional 
              de Computação Quântica (CIQUANTA)</strong>, uma iniciativa apoiada pelo Governo Federal 
              Brasileiro com um investimento inicial de US$ 20 milhões, com recursos adicionais 
              destinados a infraestrutura, laboratórios, programas de pesquisadores e construção 
              de hotel no local.
            </p>
            <p>
              O evento terá duração de <strong className="text-foreground">2 dias</strong>, reunindo um público amplo — 
              esperamos <strong className="text-foreground">1.500 participantes presenciais</strong> e mais de 
              <strong className="text-foreground"> 5.000 online</strong> — incluindo autoridades governamentais, 
              parceiros da indústria e pesquisadores de diversas instituições.
            </p>
            <p>
              Representantes de organizações como <strong className="text-foreground">Amazon, Microsoft, 
              China Electronics Technology Group Corporation</strong> e o <strong className="text-foreground">Suzhou 
              Quantum Center</strong> confirmaram participação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuasarAbout;
