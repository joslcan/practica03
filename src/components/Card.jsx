export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-wine">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <button
          className="mt-4 w-full bg-wine text-white py-2 rounded hover:bg-clay transition"
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}
