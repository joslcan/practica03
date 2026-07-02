import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl md:text-8xl font-extrabold text-red-700">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-4">
          Página no encontrada
        </h2>
        <p className="text-slate-600 mt-4 leading-7">
          La ruta que intentaste abrir no existe o fue movida. Puedes volver al inicio
          para seguir navegando por nuestro restaurante.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;