const BASE_URL = "http://localhost:3000";

export async function getProductos() {
  const response = await fetch(`${BASE_URL}/productos`);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await response.json();
  return data;
}