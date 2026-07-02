export default function Card({ title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
