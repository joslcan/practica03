import Form from "../components/Form";

function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="uppercase tracking-[4px] text-red-600 font-semibold mb-3">
          Contáctanos
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
          Reserva, consulta o envíanos tu mensaje
        </h1>
        <p className="mt-4 text-slate-600 leading-7">
          Completa el formulario y nos pondremos en contacto contigo para resolver
          tus dudas, recibir pedidos o gestionar reservas.
        </p>
      </div>

      <Form />
    </section>
  );
}

export default Contact;