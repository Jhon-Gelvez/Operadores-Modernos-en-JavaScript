
export const fusionarColecciones = (lista1, lista2) => {
  try {
    // Validamos que ambos parámetros sean arreglos (arrays)
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw "Ambos argumentos deben ser arreglos válidos";
    }

    // Fusionamos usando spread operator para crear una nueva lista (inmutabilidad)
    const coleccionFinal = [...lista1, ...lista2];

    return coleccionFinal;

  } catch (error) {
    // Captura y retorna el mensaje de error personalizado
    return `[Error Ejercicio 8]: ${error}`;
  }
};