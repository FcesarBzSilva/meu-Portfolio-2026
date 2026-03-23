import { Terminal, Database, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Sobre Mim</h2>
          <div className="space-y-4 text-slate-400 font-light leading-relaxed">
            <p>
              Olá! Me chamo Fernando. Sou graduando em Ciência da Computação e atuo como Desenvolvedor Full-Stack, com foco em otimização de Back-End e soluções em Cloud Computing. Sou certificado oficialmente como <strong className="text-slate-200">AWS Certified Cloud Practitioner</strong>.
            </p>
            <p>
              Um grande diferencial da minha carreira é a bagagem "mão na massa" com infraestrutura. Comecei a minha trajetória como suporte técnico, administrando redes (LAN/WAN), VPNs e servidores Windows/Linux. Esse contato direto com a base dura da tecnologia me deu uma fundação sólida para entender o que faz um sistema cair ou escalar na vida real.
            </p>
            <p>
              Atualmente, trabalho como Desenvolvedor Full-Stack focado em entregar plataformas eficientes e seguras. No meu dia a dia, gosto de entrar a fundo no código para resolver problemas que realmente impactam o negócio, seja aliviando a carga do servidor integrando serviços da AWS, ou estruturando os sistemas com <strong className="text-slate-200">Clean Architecture e SOLID</strong> para que o projeto tenha uma manutenção simples no longo prazo.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
            <Terminal className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Back-End</h3>
            <p className="text-slate-400 text-sm">Arquiteturas resilientes com Node.js e Java/Spring Boot.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-colors sm:-translate-y-4">
            <Cloud className="w-8 h-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Computing</h3>
            <p className="text-slate-400 text-sm">Provisionamento e deploy escalável na infraestrutura AWS.</p>
          </div>
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors sm:col-span-2">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Engenharia de Software</h3>
            <p className="text-slate-400 text-sm">Clean Architecture, Arquitetura MVC, Microserviços, CI/CD, Testes e SOLID.</p>
          </div>
          
          <div className="sm:col-span-2 mt-4 flex items-center gap-5 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 p-5 rounded-r-xl shadow-lg">
            <div className="p-3 bg-orange-500/20 rounded-lg shrink-0">
              <Cloud className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-orange-400/80 font-mono font-bold uppercase tracking-wider mb-1">Certificação Oficial</p>
              <p className="text-lg md:text-xl font-bold text-orange-50">AWS Certified Cloud Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
