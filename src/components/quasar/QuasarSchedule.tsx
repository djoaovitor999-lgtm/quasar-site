import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Coffee, 
  Mic, 
  Users, 
  Sparkles, 
  ArrowRight,
  Zap,
  Quote
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: "talk" | "break" | "ceremony" | "networking";
}

interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

const schedule: DaySchedule[] = [
  {
    day: "Dia 1",
    date: "Julho/Agosto 2026",
    items: [
      { time: "08:00", title: "Credenciamento", type: "break" },
      { time: "09:45", title: "Quasar (abertura / institucional)", type: "ceremony" },
      { time: "10:30", title: "Palestra 1", speaker: "...", type: "talk" },
      { time: "11:15", title: "Palestra 2", speaker: "...", type: "talk" },
      { time: "12:00", title: "Almoço", type: "break" },
      { time: "14:00", title: "Palestra 3", speaker: "...", type: "talk" },
      { time: "14:45", title: "Palestra 4", speaker: "...", type: "talk" },
      { time: "15:30", title: "Coffee break", type: "break" },
      { time: "16:00", title: "Palestra 5", speaker: "...", type: "talk" },
      { time: "16:45", title: "Palestra 6", speaker: "...", type: "talk" },
      { time: "17:30", title: "Painel", type: "networking" },
    ]
  },
  {
    day: "Dia 2",
    date: "Julho/Agosto 2026",
    items: [
      { time: "09:00", title: "Credenciamento", type: "break" },
      { time: "09:45", title: "Palestra 1", speaker: "...", type: "talk" },
      { time: "10:30", title: "Palestra 2", speaker: "...", type: "talk" },
      { time: "11:15", title: "Palestra 3", speaker: "...", type: "talk" },
      { time: "12:00", title: "Almoço", type: "break" },
      { time: "14:00", title: "Palestra 4", speaker: "...", type: "talk" },
      { time: "15:45", title: "Palestra 5", speaker: "...", type: "talk" },
      { time: "15:30", title: "Coffee break", type: "break" },
      { time: "16:00", title: "Palestra 6", speaker: "...", type: "talk" },
      { time: "16:45", title: "Palestra 7", speaker: "...", type: "talk" },
      { time: "17:30", title: "Palestra 8", speaker: "...", type: "talk" },
      { time: "18:15", title: "Encerramento", type: "ceremony" },
    ]
  }
];

const QuasarSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Renderização diferenciada baseada no tipo de item
  const renderItem = (item: ScheduleItem, index: number) => {
    // Estilo "Separador" para Breaks (Intervalos)
    if (item.type === "break") {
      return (
        <div 
          key={index}
          className="relative py-6 flex items-center justify-center group"
        >
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-all duration-500"></div>
          <div className="relative z-10 bg-background px-6 py-1.5 rounded-full border border-border shadow-sm flex items-center gap-3 text-sm text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
            <span className="font-mono text-xs opacity-70">{item.time}</span>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <span className="uppercase tracking-wide text-xs font-semibold flex items-center gap-2">
              <Coffee className="w-3 h-3" />
              {item.title}
            </span>
          </div>
        </div>
      );
    }

    // Estilo "Card de Destaque" para Palestras, Cerimônias e Networking
    const isHighlight = item.type === "ceremony" || item.type === "networking";
    
    return (
      <div 
        key={index}
        className="relative group perspective-1000"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className={cn(
          "relative p-6 rounded-2xl border transition-all duration-500 ease-out overflow-hidden backdrop-blur-sm",
          // Estilos base
          "bg-card/50 hover:bg-card/80",
          // Borda brilhante no hover
          "hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.1)] hover:border-primary/40",
          // Transformação 3D sutil
          hoveredIndex === index ? "-translate-y-1 scale-[1.01]" : "",
          // Cores específicas por tipo
          isHighlight ? "border-primary/20 bg-primary/5" : "border-border/50"
        )}>
          
          {/* Efeito de brilho de fundo (Glow) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-3xl rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            
            {/* Coluna da Esquerda: Tempo e Ícone */}
            <div className="flex items-center gap-4 min-w-[140px]">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm transition-colors duration-300",
                isHighlight ? "bg-primary text-primary-foreground border-primary" : "bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
              )}>
                {item.type === 'ceremony' ? <Sparkles className="w-5 h-5" /> : 
                 item.type === 'networking' ? <Users className="w-5 h-5" /> :
                 <Mic className="w-5 h-5" />}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground font-mono">
                  {item.time}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  Horário
                </span>
              </div>
            </div>

            {/* Coluna Central: Conteúdo */}
            <div className="flex-1 space-y-2">
              <h4 className={cn(
                "text-xl font-medium tracking-tight transition-colors",
                isHighlight ? "text-primary font-bold" : "text-foreground group-hover:text-primary"
              )}>
                {item.title}
              </h4>
              
              {item.speaker && (
                <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  <Quote className="w-3 h-3 rotate-180 opacity-50" />
                  <p className="text-sm font-medium">{item.speaker}</p>
                </div>
              )}

              {item.type === 'networking' && (
                <p className="text-sm text-muted-foreground">Momento para conexões e troca de experiências.</p>
              )}
            </div>

            {/* Coluna da Direita: Ação (Decorativo) */}
            <div className="hidden md:flex items-center justify-end">
              <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="programacao" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorativo Estilo "Aurora" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6 animate-fade-in-up">
            <Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" />
            Agenda Oficial
          </div>
          
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 tracking-tight">
            Programação <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Imersiva</span>
          </h2>
          
          <p className="max-w-xl text-lg text-muted-foreground font-light">
            Prepare-se para dois dias intensos de conteúdo, inovação e networking estratégico.
          </p>
        </div>

        {/* Seletor de Dias Estilizado */}
        <div className="flex justify-center mb-16">
          <div className="bg-secondary/30 p-2 rounded-2xl flex gap-2 backdrop-blur-md border border-border/50 shadow-lg">
            {schedule.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDay(idx)}
                className={cn(
                  "relative px-8 py-4 rounded-xl text-sm font-medium transition-all duration-500 overflow-hidden",
                  activeDay === idx
                    ? "text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                )}
              >
                {/* Background Animado do Botão Ativo */}
                {activeDay === idx && (
                  <div className="absolute inset-0 bg-primary w-full h-full rounded-xl transition-all"></div>
                )}
                
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <span className={cn("text-base font-bold", activeDay === idx ? "text-primary-foreground" : "")}>
                    {day.day}
                  </span>
                  <span className={cn("text-xs opacity-80", activeDay === idx ? "text-primary-foreground" : "")}>
                    {day.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lista da Programação */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="transition-all duration-500 ease-in-out opacity-100 transform translate-y-0">
            {schedule[activeDay].items.map((item, idx) => renderItem(item, idx))}
          </div>
        </div>
        
        {/* Rodapé da Seção */}
        <div className="mt-20 text-center">
            <p className="text-sm text-muted-foreground">
                * A programação está sujeita a alterações sem aviso prévio.
            </p>
        </div>
      </div>
    </section>
  );
};

export default QuasarSchedule;