import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Fernando.dev
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-slate-300 hover:text-white transition-colors duration-200">Sobre</a>
            <a href="#experiencia" className="text-slate-300 hover:text-white transition-colors duration-200">Experiência</a>
            <a href="#habilidades" className="text-slate-300 hover:text-white transition-colors duration-200">Habilidades</a>
            <a href="#projetos" className="text-slate-300 hover:text-white transition-colors duration-200">Projetos</a>
            <a href="#contato" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
          </nav>
          <div className="flex space-x-4">
            <a href="https://github.com/FcesarBzSilva" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/fernandobzsilva/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
