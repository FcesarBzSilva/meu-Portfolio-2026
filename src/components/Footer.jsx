export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-8 text-center text-slate-500 font-light text-sm">
      <p>&copy; {new Date().getFullYear()} Fernando Cesar Bezerra Silva. Todos os direitos reservados.</p>
      <p className="mt-2">Desenvolvido com visão focada em resultados e escalabilidade (React, Vite & Tailwind CSS).</p>
    </footer>
  )
}
