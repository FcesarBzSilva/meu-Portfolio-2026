import { Briefcase, Cloud, Shield } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Sempre Comigo",
    role: "Desenvolvedor Full-Stack",
    period: "Novembro 2025 – Atual",
    type: "Presencial",
    icon: <Shield className="w-5 h-5 text-indigo-400" />,
    description: "Desenvolvimento full-stack (Node.js e React/Tailwind) para plataforma de rastreamento. Otimização arquitetural empregando S3 Pre-signed URLs para aliviar uploads do backend. Implementação de e-mails transacionais com AWS SES via Lambda e segurança robusta utilizando Keycloak (RBAC). Refatoração de sistemas legados eliminando regras de negócio falhas."
  },
  {
    id: 2,
    company: "UOL Compass",
    role: "Bolsista Back-End",
    period: "Novembro 2024 – Abril 2025",
    type: "Remoto",
    icon: <Cloud className="w-5 h-5 text-blue-400" />,
    description: "Integração e deploy de arquiteturas escaláveis e altamente resilientes sob ambiente da AWS. Criação de APIs RESTful usando Java e Spring Boot. Ampla utilização de mensageria assíncrona desacoplada através do RabbitMQ e manipulação sólida de instâncias EC2, S3 e Lambda."
  },
  {
    id: 3,
    company: "Dois A Tecnologia",
    role: "Auxiliar Téc. Infraestrutura",
    period: "Setembro 2021 – Setembro 2024",
    type: "Presencial",
    icon: <Briefcase className="w-5 h-5 text-slate-400" />,
    description: "Sólida base na administração de servidores Windows e Linux. Implementação de VPNs corporativas seguras, manutenção de hardware, resolução de incidentes de rede local (LAN/WAN), e acompanhamento rigoroso com ferramentas de backup em nuvem."
  }
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-800/50">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Experiência Profissional</h2>
        <p className="text-slate-400 font-light">Minha trajetória prática construindo soluções para o mercado real.</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-slate-900 text-slate-200 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
              {exp.icon}
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-bold text-lg text-slate-100">{exp.role}</span>
                <span className="text-xs font-medium text-blue-400 px-2 py-1 bg-blue-500/10 rounded-full">{exp.type}</span>
              </div>
              <h4 className="text-md font-semibold text-slate-400 mb-1">{exp.company}</h4>
              <time className="block text-xs font-mono text-slate-500 mb-4">{exp.period}</time>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
