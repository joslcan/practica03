function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">AntojApp</h2>
        <p className="mt-2 text-slate-300">
          La mejor comida rápida para compartir en familia.
        </p>

      
        <div className="mt-8 border-t border-slate-600 pt-6 text-center">
          <p className="text-lg font-semibold">
            © 2026 AntojApp. Todos los derechos reservados.
          </p>

          <p className="mt-2 text-slate-300">
            © 2026 - JavaScript Avanzado
          </p>

          <h3 className="text-xl font-bold text-yellow-400 mt-6 mb-4">
            Desarrollado por:
          </h3>

          <ul className="space-y-2 text-slate-200">
            <li>Jose Luis Cano - U23252346</li>
            <li>Nilver Coronado - U23253858</li>
            <li>Gloria Renata Sáenz - U22325816</li>
            <li>Brenda Silvana Lopez - U23220119</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;