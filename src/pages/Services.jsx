import services from "../assets/services.json";
import Card from "../components/Card";

export default function Services() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-wine mb-6">Catálogo de Antojos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv) => (
          <Card
            key={srv.id}
            title={srv.title}
            description={srv.description}
            image={srv.image}
          />
        ))}
      </div>
    </div>
  );
}
