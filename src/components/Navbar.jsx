import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-300 transition";

  return (
    <header className="bg-red-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-white text-2xl font-extrabold tracking-wide">
            AntojApp
          </span>
          <span className="text-red-100 text-xs tracking-[3px] uppercase">
            Food Restaurants
          </span>
        </Link>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          
        </button>

        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            <li>
              <NavLink to="/" className={linkClass}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={linkClass}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={linkClass}>
                Menú
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={linkClass}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-red-800 px-6 pb-4">
          <ul className="flex flex-col gap-3 font-medium">
            <li>
              <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/nosotros" className={linkClass} onClick={() => setMenuOpen(false)}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={linkClass} onClick={() => setMenuOpen(false)}>
                Menú
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={linkClass} onClick={() => setMenuOpen(false)}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;