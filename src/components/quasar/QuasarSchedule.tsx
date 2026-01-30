import { useState } from "react";

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
      { time: "08:00", title: "Credenciamento e Welcome Coffee", type: "break" },
      { time: "09:00", title: "Cerimônia de Abertura e Inauguração do CIQUANTA", type: "ceremony" },
      { time: "10:00", title: "Palestra Magna: O Futuro da Computação Quântica", speaker: "Fernando Brandão", type: "talk" },
      { time: "11:00", title: "Intervalo", type: "break" },
      { time: "11:30", title: "Dissipação e Decoerência em Sistemas Quânticos", speaker: "Amir Caldeira", type: "talk" },
      { time: "12:30", title: "Almoço", type: "break" },
      { time: "14:00", title: "Painel: Indústria e Computação Quântica", speaker: "Amazon, Microsoft, CETC", type: "talk" },
      { time: "15:30", title: "Intervalo", type: "break" },
      { time: "16:00", title: "Algoritmos Quânticos: Da Teoria à Prática", speaker: "Renato Portugal", type: "talk" },
      { time: "17:00", title: "Mesa Redonda: Cooperação Internacional", type: "talk" },
      { time: "18:30", title: "Coquetel de Networking", type: "networking" },
    ]
  },
  {
    day: "Dia 2",
    date: "Julho/Agosto 2026",
    items: [
      { time: "08:30", title: "Café da Manhã", type: "break" },
      { time: "09:00", title: "ZX-Calculus e Verificação de Circuitos Quânticos", speaker: "Aleks Kissinger", type: "talk" },
      { time: "10:00", title: "Apresentação: Suzhou Quantum Center", speaker: "Representantes Chineses", type: "talk" },
      { time: "11:00", title: "Intervalo", type: "break" },
      { time: "11:30", title: "Painel: Formação de Recursos Humanos em Computação Quântica", type: "talk" },
      { time: "12:30", title: "Almoço", type: "break" },
      { time: "14:00", title: "Tour Guiado pelas Instalações do CIQUANTA", type: "networking" },
      { time: "15:30", title: "Workshop: Introdução à Programação Quântica", type: "talk" },
      { time: "17:00", title: "Painel de Encerramento: Próximos Passos para o Brasil Quântico", type: "talk" },
      { time: "18:00", title: "Cerimônia de Encerramento", type: "ceremony" },
    ]
  }
];

const QuasarSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  const getTypeStyles = (type: ScheduleItem["type"]) => {
    switch (type) {
      case "talk":
        return "border-l-foreground";
      case "ceremony":
        return "border-l-foreground bg-secondary";
      case "break":
        return "border-l-muted-foreground/30 text-muted-foreground";
      case "networking":
        return "border-l-muted-foreground bg-secondary";
      default:
        return "border-l-border";
    }
  };

  return (
    <section id="programacao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-16">
          Programação
        </h2>

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {schedule.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                activeDay === idx
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground text-center mb-8">
            {schedule[activeDay].date}
          </p>
          <div className="space-y-0">
            {schedule[activeDay].items.map((item, idx) => (
              <div
                key={idx}
                className={`border-l-2 pl-6 py-4 ${getTypeStyles(item.type)}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6">
                  <span className="text-sm font-medium text-foreground min-w-[60px]">
                    {item.time}
                  </span>
                  <div className="flex-1">
                    <h4 className={`font-medium ${item.type === "break" ? "text-muted-foreground" : "text-foreground"}`}>
                      {item.title}
                    </h4>
                    {item.speaker && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.speaker}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuasarSchedule;
