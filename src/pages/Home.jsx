export default function Home() {
  return (
    <div className="container mx-auto p-6 text-center">
      <section className="py-12 bg-mint rounded shadow-md">
        <h1 className="text-4xl font-bold text-wine">AntojApp</h1>
        <p className="mt-4 text-lg text-clay">
          Encuentra tus antojos favoritos y ordénalos fácilmente.
        </p>
        <a
          href="/services"
          className="mt-6 inline-block bg-wine text-white px-6 py-2 rounded hover:bg-clay transition"
        >
          Ver Catálogo
        </a>
      </section>
    </div>
  );
}

