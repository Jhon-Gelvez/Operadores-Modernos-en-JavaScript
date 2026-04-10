
export const agregarInventario = (lista, nuevoItem) => {
  const nuevoInventario = [...lista, nuevoItem];
  console.log(`Inventario actualizado. Total de ítems: ${nuevoInventario.length}`);
  return nuevoInventario;
};
