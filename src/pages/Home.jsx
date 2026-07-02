export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold">Bienvenido a Practica03</h1>
        <p className="mt-4 text-lg">Explora nuestros servicios y conoce más.</p>
        <a href="/services" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">
          Ver Servicios
        </a>
      </section>
    </div>
  );
}
