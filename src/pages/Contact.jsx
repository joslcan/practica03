export default function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-wine mb-6">Contáctanos</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full border border-gray-300 p-2 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-wine text-white px-6 py-2 rounded hover:bg-clay transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
