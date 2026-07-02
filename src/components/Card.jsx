import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import pollobroaster from "../assets/pollobroaster.png";

function Card({ producto }) {
  let imagenProducto = burger;

  if (producto.categoria === "Pizzas") {
    imagenProducto = pizza;
  } else if (producto.categoria === "Pollo") {
    imagenProducto = pollobroaster;
  }

  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-amber-100">
      <div className="bg-amber-100 p-6 flex justify-center">
        <img
          src={imagenProducto}
          alt={producto.nombre}
          className="h-44 object-contain transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-800">{producto.nombre}</h3>
          <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">
            {producto.categoria}
          </span>
        </div>

        <p className="text-slate-600 mt-3 leading-7">{producto.descripcion}</p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-red-700">
            S/ {producto.precio.toFixed(2)}
          </p>

          <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-full font-semibold transition">
            Pedir ahora
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;