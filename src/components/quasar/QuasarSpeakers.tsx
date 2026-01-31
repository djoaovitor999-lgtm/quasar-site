import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import aleksKissinger from "@/assets/speakers/aleks-kissinger.jpg";
import fernandoBrandao from "@/assets/speakers/fernando-brandao.jpg";
import amirCaldeira from "@/assets/speakers/amir-caldeira.jpg";
import renatoPortugal from "@/assets/speakers/renato-portugal.jpg";
import MarinaAnsanelli from '@/assets/speakers/marina-ansanelli.jpeg';
import FedericoHolik from '@/assets/speakers/federico-holik.jpeg'; 
import DanielHaro from '@/assets/speakers/daniel-moraes.jpeg'; 
import EricoTexeira from '@/assets/speakers/erico-texeira.jpeg';
import SamsonAbramsky from '@/assets/speakers/samson-abramsky.jpeg';
import RafaelChaves from '@/assets/speakers/rafael-chaves.jpeg';

interface Speaker {
  id: number;
  name: string;
  title: string;
  institution: string;
  image: string;
  bio: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Samson Abramsky",
    title: "Professor Emérito",
    institution: "University of Oxford",
    image: SamsonAbramsky,
    bio: "Samson Abramsky é Professor Emérito de Ciência da Computação na Universidade de Oxford e Fellow da Royal Society. É um dos fundadores da Mecânica Quântica Categórica, aplicando teoria das categorias para unificar lógica e física. Seu trabalho revolucionou o entendimento da contextualidade, não-localidade e semântica da computação quântica.",
  },
  {
    id: 2,
    name: "Fernando Brandão",
    title: "Head de Algoritmos Quânticos",
    institution: "AWS / Caltech",
    image: fernandoBrandao,
    bio: "Fernando Brandão é referência global em tecnologia, atua como Diretor de Algoritmos Quânticos na Amazon Web Services (AWS) e Professor Bren no Caltech. Seus trabalhos premiados redefiniram o entendimento sobre emaranhamento e 'supremacia quântica', liderando o desenvolvimento de hardware e software para a próxima geração de computadores."
  },
  {
    id: 3,
    name: "Amir Caldeira",
    title: "Professor Emérito",
    institution: "UNICAMP",
    image: amirCaldeira,
    bio: "Amir Caldeira é Professor Emérito da Universidade Estadual de Campinas (UNICAMP) e um dos físicos brasileiros mais citados internacionalmente. É conhecido pelo modelo Caldeira-Leggett, desenvolvido com Anthony Leggett (Nobel de Física 2003), que descreve a dissipação em sistemas quânticos. Suas contribuições foram fundamentais para o entendimento da decoerência quântica."
  },
  {
    id: 4,
    name: "Rafael Chaves",
    title: "Professor e Vice-diretor",
    institution: "IIP",
    image: RafaelChaves,
    bio: "Rafael Chaves é Professor na UFRN e Vice-diretor do Instituto Internacional de Física (IIP). Lidera o grupo de pesquisa em Informação e Matéria Quântica e é membro afiliado da Academia Brasileira de Ciências. Suas pesquisas pioneiras focam em causalidade quântica, aprendizado de máquina quântico e fundamentos da mecânica quântica.",
  },
  {
    id: 5,
    name: "Aleks Kissinger",
    title: "Professor Associado",
    institution: "University of Oxford",
    image: aleksKissinger,
    bio: "Aleks Kissinger é Professor Associado de Ciência da Computação na Universidade de Oxford. É um dos criadores do ZX-calculus, uma linguagem gráfica para raciocínio sobre computação quântica. Seu trabalho em fundamentos da mecânica quântica e verificação de circuitos quânticos tem impacto significativo na área."
  },
  {
    id: 6,
    name: "Renato Portugal",
    title: "Pesquisador Titular",
    institution: "LNCC",
    image: renatoPortugal,
    bio: "Renato Portugal é Pesquisador Titular do Laboratório Nacional de Computação Científica (LNCC). É autor de livros sobre computação quântica e caminhadas quânticas, sendo uma referência internacional na área. Suas pesquisas em algoritmos quânticos contribuíram para o avanço da computação quântica no Brasil."
  },
  {
    id: 9,
    name: "Erico Teixeira",
    title: "Pesquisador Líder",
    institution: "Venturus",
    image: EricoTexeira,
    bio: "Erico Teixeira é Doutor em Química Teórica e especialista em Computação Quântica. Une o rigor acadêmico à aplicação industrial, desenvolvendo algoritmos pioneiros para resolver problemas complexos de química e otimização em cenários reais de mercado.",
  },
  {
    id: 8,
    name: "Marina Ansanelli",
    title: "Pesquisadora de Doutorado",
    institution: "Perimeter Institute",
    image: MarinaAnsanelli,
    bio: "Marina Ansanelli é pesquisadora em destaque no renomado Perimeter Institute, explora as fronteiras entre inferência causal e mecânica quântica. Vencedora do Emmy Noether Emerging Talent Fund, investiga como novas estruturas causais podem revolucionar a estatística e a inteligência artificial quântica.",
  },
  {
    id: 7,
    name: "Federico Holik",
    title: "Pesquisador Sênior",
    institution: "CONICET / UNLP",
    image: FedericoHolik,
    bio: "Federico Holik é autoridade latino-americana em Lógica e Fundamentos Quânticos. Atuando pelo CONICET, seu trabalho investiga a estrutura matemática profunda da informação quântica, criando as bases teóricas essenciais para o desenvolvimento de novas tecnologias computacionais.",
  },
  {
    id: 10,
    name: "Daniel Haro",
    title: "Head de Tecnologias Emergentes",
    institution: "Venturus",
    image: DanielHaro,
    bio: "Daniel Haro é Líder estratégico de inovação no Venturus, focado em preparar grandes empresas para a era do 'Quantum Readiness'. Atua na linha de frente da tradução tecnológica, conectando a ciência quântica avançada a aplicações de mercado e novos modelos de negócios.",
  },

];

const QuasarSpeakers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  return (
    <section id="palestrantes" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-16">
          Palestrantes (Preliminar)
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <button
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group text-left bg-background p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-1">
                {speaker.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {speaker.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {speaker.institution}
              </p>
            </button>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {speakers.map((speaker) => (
                <button
                  key={speaker.id}
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="min-w-full px-4 text-left"
                >
                  <div className="bg-background p-6">
                    <div className="aspect-square overflow-hidden mb-4 grayscale">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {speaker.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {speaker.institution}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 border border-border hover:bg-accent transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {speakers.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-foreground" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 border border-border hover:bg-accent transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Speaker Modal */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-light">
                {selectedSpeaker?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedSpeaker && (
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedSpeaker.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedSpeaker.bio}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default QuasarSpeakers;
