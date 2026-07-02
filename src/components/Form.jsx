export default function Form() {
  return (
    <form className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow-md">
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
        className="bg-wine text-white px-6 py-2 rounded hover:bg-clay transition w-full"
      >
        Enviar
      </button>
    </form>
  );
}
