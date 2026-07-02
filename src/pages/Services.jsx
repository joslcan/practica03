import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getProductos } from "../services/api";

function Services() {
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    cargarProductos();
  }, []);

  async function cargarProductos() {
    try {
      setLoading(true);
      const data = await getProductos();
      setProductos(data);
      setError("");
    } catch (err) {
      setError("No se pudo cargar el menú. Verifica que JSON Server esté ejecutándose.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const categorias = ["Todos", "Hamburguesas", "Pizzas", "Pollo"];

  const productosFiltrados =
    categoriaActiva === "Todos"
      ? productos
      : productos.filter((item) => item.categoria === categoriaActiva);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="text-center mb-10">
        <p className="uppercase tracking-[4px] text-red-600 font-semibold mb-3">
          Nuestro menú
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Sabores irresistibles para todos los gustos
        </h1>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-7">
          Explora nuestra selección de hamburguesas, pizzas y pollo broaster.
          Esta sección consume datos dinámicamente desde JSON Server utilizando
          Fetch API, Hooks y renderizado con React.
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaActiva(categoria)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              categoriaActiva === categoria
                ? "bg-red-700 text-white"
                : "bg-white text-slate-700 border border-slate-300 hover:bg-red-50"
            }`}
          >
            {categoria}
          </button>
        ))}
      </div>

      
      {loading && (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-slate-600">Cargando menú...</p>
        </div>
      )}

      {error && !loading && (
        <div className="max-w-2xl mx-auto bg-red-100 border border-red-300 text-red-700 px-6 py-4 rounded-2xl text-center">
          {error}
        </div>
      )}

      {!loading && !error && productosFiltrados.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-slate-600">
            No hay productos disponibles en esta categoría.
          </p>
        </div>
      )}

      
      {!loading && !error && productosFiltrados.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Services;