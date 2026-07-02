import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validarFormulario() {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      nuevosErrores.correo = "Ingresa un correo válido.";
    }

    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{9}$/.test(formData.telefono)) {
      nuevosErrores.telefono = "El teléfono debe tener 9 dígitos.";
    }

    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    } else if (formData.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nuevosErrores;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const erroresValidacion = validarFormulario();
    setErrores(erroresValidacion);

    if (Object.keys(erroresValidacion).length === 0) {
      setEnviado(true);

      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
      });

      setTimeout(() => {
        setEnviado(false);
      }, 4000);
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 text-center mb-2">
        Formulario de contacto
      </h2>
      <p className="text-slate-600 text-center mb-8">
        Completa tus datos y te responderemos lo antes posible.
      </p>

      {enviado && (
        <div className="mb-6 rounded-xl bg-green-100 border border-green-300 text-green-700 px-4 py-3">
          Tu mensaje fue enviado correctamente. Nos pondremos en contacto contigo.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nombre */}
        <div>
          <label className="block font-semibold mb-2 text-slate-700">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
          {errores.nombre && (
            <p className="text-red-600 text-sm mt-2">{errores.nombre}</p>
          )}
        </div>

        
        <div>
          <label className="block font-semibold mb-2 text-slate-700">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
          {errores.correo && (
            <p className="text-red-600 text-sm mt-2">{errores.correo}</p>
          )}
        </div>

        
        <div>
          <label className="block font-semibold mb-2 text-slate-700">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="999888777"
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
          />
          {errores.telefono && (
            <p className="text-red-600 text-sm mt-2">{errores.telefono}</p>
          )}
        </div>

       
        <div>
          <label className="block font-semibold mb-2 text-slate-700">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            placeholder="Escribe tu consulta, pedido o reserva..."
            className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400 resize-none"
          ></textarea>
          {errores.mensaje && (
            <p className="text-red-600 text-sm mt-2">{errores.mensaje}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-xl transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

export default Form;