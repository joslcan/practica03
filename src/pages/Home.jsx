import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import burger from "../assets/burger.png";
import pizza from "../assets/pizza.png";
import pollobroaster from "../assets/pollobroaster.png";

function Home() {
  const destacados = [
    {
      id: 1,
      nombre: "Hamburguesa Clásica",
      descripcion: "Pan brioche, carne jugosa, queso cheddar y papas crocantes.",
      imagen: burger,
    },
    {
      id: 2,
      nombre: "Pizza Suprema",
      descripcion: "Masa artesanal, salsa especial, queso fundido y toppings premium.",
      imagen: pizza,
    },
    {
      id: 3,
      nombre: "Pollo Broaster",
      descripcion: "Crujiente por fuera, tierno por dentro y acompañado de papas.",
      imagen: pollobroaster,
    },
  ];

  const promociones = [
    {
      id: 1,
      titulo: "Combo Burger + Gaseosa",
      detalle: "Hamburguesa clásica + papas + bebida personal por precio especial.",
      precio: "S/ 22.90",
    },
    {
      id: 2,
      titulo: "Promo Pizza Familiar",
      detalle: "Pizza grande + gaseosa de 1.5L ideal para compartir en familia.",
      precio: "S/ 49.90",
    },
    {
      id: 3,
      titulo: "Broaster Dúo",
      detalle: "2 presas de pollo + papas + ensalada + 2 bebidas.",
      precio: "S/ 29.90",
    },
  ];

  return (
    <div>
     
      <section className="bg-gradient-to-r from-red-700 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-yellow-300 font-semibold mb-3">
              Sabor que conquista
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Disfruta la mejor comida rápida en un solo lugar
            </h1>
            <p className="mt-5 text-lg text-red-50 leading-8">
              En AntojApp combinamos sabor, rapidez y calidad para ofrecerte
              hamburguesas, pizzas y pollo broaster preparados al instante, con
              ingredientes frescos y una experiencia pensada para toda la familia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-full font-bold transition"
              >
                Ver menú
              </Link>
              <Link
                to="/contacto"
                className="border border-white hover:bg-white hover:text-red-700 px-6 py-3 rounded-full font-semibold transition"
              >
                Reservar / Contactar
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={hero}
              alt="Comida rápida FastBites"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700">
            Nuestros favoritos
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Conoce algunos de los productos más pedidos por nuestros clientes.
            Preparaciones deliciosas, ingredientes frescos y una experiencia
            pensada para compartir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destacados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="bg-amber-100 p-6 flex justify-center">
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="h-44 object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800">{item.nombre}</h3>
                <p className="text-slate-600 mt-3">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-red-700 mb-3">Ingredientes frescos</h3>
            <p className="text-slate-600">
              Seleccionamos productos de calidad para garantizar sabor y frescura en cada pedido.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-red-700 mb-3">Atención rápida</h3>
            <p className="text-slate-600">
              Preparamos tus pedidos con agilidad para que disfrutes tu comida sin largas esperas.
            </p>
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-red-700 mb-3">Variedad en el menú</h3>
            <p className="text-slate-600">
              Desde hamburguesas y pizzas hasta pollo broaster, tenemos opciones para todos.
            </p>
          </div>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[4px] text-red-600 font-semibold mb-3">
            Promociones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Combos pensados para compartir
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Aprovecha nuestras promociones especiales y disfruta más sabor a un mejor precio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promociones.map((promo) => (
            <div
              key={promo.id}
              className="bg-gradient-to-br from-red-700 to-orange-500 text-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold">{promo.titulo}</h3>
              <p className="mt-3 text-red-50 leading-7">{promo.detalle}</p>
              <p className="mt-6 text-3xl font-extrabold text-yellow-300">{promo.precio}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para disfrutar de tu comida favorita?
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto leading-7">
            Revisa nuestro menú, descubre promociones y contáctanos para realizar tu pedido
            o reservar una mesa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-6 py-3 rounded-full font-bold transition"
            >
              Ir al menú
            </Link>
            <Link
              to="/contacto"
              className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-full font-semibold transition"
            >
              Contactarnos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;