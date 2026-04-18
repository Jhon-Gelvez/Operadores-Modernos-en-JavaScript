export const evaluar = (...valores) => {
  try {
    // Validación: que todos sean números
    if (!valores.every(v => typeof v === 'number' && !Number.isNaN(v))) {
      throw "Todos los argumentos deben ser números válidos";
    }

    // Spread para crear nueva lista (inmutabilidad)
    const datos = [...valores];
    
    // Cálculo del promedio
    return datos.reduce((acc, n) => acc + n, 0) / (datos.length || 1);

  } catch (error) {
    return `[Error Ejercicio 7]: ${error}`;
  }
};