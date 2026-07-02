import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-wine text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AntojApp</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-clay transition">Inicio</Link>
          <Link to="/about" className="hover:text-clay transition">Nosotros</Link>
          <Link to="/services" className="hover:text-clay transition">Catálogo</Link>
          <Link to="/contact" className="hover:text-clay transition">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
