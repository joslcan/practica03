function About() {
  const ventajas = [
    {
      id: 1,
      titulo: "Calidad garantizada",
      descripcion:
        "Trabajamos con ingredientes seleccionados y procesos cuidadosos para asegurar el mejor sabor.",
    },
    {
      id: 2,
      titulo: "Atención cercana",
      descripcion:
        "Nuestro equipo busca brindar una experiencia agradable, rápida y orientada al cliente.",
    },
    {
      id: 3,
      titulo: "Variedad para todos",
      descripcion:
        "Ofrecemos hamburguesas, pizzas y pollo broaster para diferentes gustos y ocasiones.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[4px] text-red-600 font-semibold mb-3">
          Sobre nosotros
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Pasión por el sabor y la rapidez
        </h1>
        <p className="mt-6 text-lg text-slate-600 leading-8">
          AntojApp es un restaurante de comida rápida creado con la misión de ofrecer
          productos deliciosos, preparados con ingredientes frescos y presentados con un
          servicio ágil y cercano. Nuestra propuesta combina sabor, variedad y una
          experiencia moderna para quienes disfrutan de hamburguesas, pizzas y pollo broaster.
        </p>
      </div>

      {/* Misión, visión, valores */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Misión</h2>
          <p className="text-slate-600 leading-7">
            Brindar una experiencia gastronómica rápida, deliciosa y accesible, ofreciendo
            productos de calidad que satisfagan a nuestros clientes en cada visita.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Visión</h2>
          <p className="text-slate-600 leading-7">
            Ser reconocidos como un restaurante líder en comida rápida, destacando por
            nuestro sabor, innovación y excelente atención al cliente.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Valores</h2>
          <p className="text-slate-600 leading-7">
            Calidad, responsabilidad, rapidez, compromiso con el cliente, trabajo en equipo
            y mejora continua en cada uno de nuestros procesos.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="mt-16 bg-white rounded-3xl shadow-md p-8 md:p-12">
        <h2 className="text-3xl font-bold text-red-700 mb-5">Nuestra historia</h2>
        <p className="text-slate-600 leading-8 mb-4">
          AntojApp nació como una propuesta enfocada en ofrecer comida rápida con una
          presentación moderna, sabores intensos y una atención eficiente. Desde el inicio,
          la idea fue crear un espacio donde las personas pudieran disfrutar de sus platos
          favoritos sin sacrificar calidad ni tiempo.
        </p>
        <p className="text-slate-600 leading-8">
          Hoy buscamos consolidarnos como una opción confiable para familias, estudiantes y
          trabajadores que desean una experiencia rica, práctica y accesible, integrando
          además herramientas tecnológicas para mostrar el menú y facilitar el contacto con
          nuestros clientes.
        </p>
      </div>

     
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            ¿Por qué elegir AntojApp?
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Nuestro compromiso va más allá del sabor: buscamos una experiencia completa,
            rápida y agradable para cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ventajas.map((item) => (
            <div key={item.id} className="bg-amber-50 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-red-700 mb-3">{item.titulo}</h3>
              <p className="text-slate-600 leading-7">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;