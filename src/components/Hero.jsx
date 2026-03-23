import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Disponível para novas oportunidades
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Desenvolvedor <br />
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Full-Stack & Cloud
        </span>
      </h1>
      
      <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        Especialista em construir soluções escaláveis com Node.js, React e AWS. 
        Transformando problemas complexos de negócios em arquiteturas resilientes e de alta performance.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
        <a href="#projetos" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all hover:scale-105 active:scale-95">
          Ver Projetos
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="/Curriculo_Fernando_Cesar_Bezerra_Silva.pdf" download="Curriculo_Fernando_Cesar_Bezerra_Silva.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-all hover:scale-105 active:scale-95">
          Baixar Currículo
          <Download className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
