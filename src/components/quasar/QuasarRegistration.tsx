import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// --- CONFIGURAÇÃO DO GOOGLE FORMS ---
const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe3BVoAk0HBdj7NXX_6mxuwoTFlIQNBEYltZj59IVSFFeH7xw/formResponse";

const FIELD_IDS = {
  name: "entry.1506848749",
  email: "entry.1884448240",
  institution: "entry.618501221",
  role: "entry.688746124",
  participation: "entry.1209571215",
  message: "entry.618321684"
};

const QuasarRegistration = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    participation: "",
    message: ""
  });

  // Função de validação local para dar feedback imediato
  const validateForm = () => {
    if (!formData.name.trim()) return "Por favor, preencha o seu nome completo.";
    
    // Validação simples de formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Por favor, insira um endereço de e-mail válido.";
    }

    if (!formData.institution.trim()) return "Por favor, informe sua Instituição ou Empresa.";
    if (!formData.participation) return "Selecione uma modalidade de participação (Presencial, Online, etc).";
    
    return null; // Sem erros
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Executa a validação antes de qualquer envio
    const validationError = validateForm();
    if (validationError) {
      toast({
        title: "Atenção: Campos obrigatórios",
        description: validationError,
        variant: "destructive", // Vermelho para chamar atenção
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const googleFormData = new FormData();
      googleFormData.append(FIELD_IDS.name, formData.name);
      googleFormData.append(FIELD_IDS.email, formData.email);
      googleFormData.append(FIELD_IDS.institution, formData.institution);
      googleFormData.append(FIELD_IDS.role, formData.role);
      googleFormData.append(FIELD_IDS.participation, formData.participation);
      googleFormData.append(FIELD_IDS.message, formData.message);

      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: googleFormData,
      });

      // Sucesso
      toast({
        title: "Inscrição Enviada!",
        description: "Seus dados foram registrados com sucesso. Em breve entraremos em contato.",
        className: "bg-green-500 text-white border-none", // Estilo opcional para destacar sucesso
      });

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        institution: "",
        role: "",
        participation: "",
        message: ""
      });

    } catch (error) {
      console.error("Erro ao enviar:", error);
      
      // Tratamento de erro com orientações do que fazer
      toast({
        title: "Falha no Envio",
        description: "Não foi possível conectar ao servidor. Verifique sua internet e tente novamente. Se o erro persistir, contate a organização do evento.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inscricao" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-4">
            Pré-Inscrição
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Registre seu interesse em participar do II Encontro Quasar
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                // Removemos o 'required' nativo para usar nossa validação customizada mais descritiva
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border-border"
                placeholder="Ex: João da Silva"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border-border"
                placeholder="exemplo@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="institution">Instituição/Empresa *</Label>
              <Input
                id="institution"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                className="bg-background border-border"
                placeholder="Ex: UFPB / Empresa X"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Cargo/Função</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-background border-border"
                placeholder="Ex: Estudante, Pesquisador, Desenvolvedor"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="participation">Modalidade de Participação *</Label>
              <Select
                value={formData.participation}
                onValueChange={(value) => setFormData({ ...formData, participation: value })}
              >
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Presencial">Presencial</SelectItem>
                  <SelectItem value="Online">Online</SelectItem>
                  <SelectItem value="Ambos">Ambos (se disponível)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem (opcional)</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background border-border resize-none"
                placeholder="Conte-nos sobre seu interesse ou dúvidas..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90"
            >
              {isSubmitting ? "Enviando..." : "Enviar Pré-Inscrição"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuasarRegistration;