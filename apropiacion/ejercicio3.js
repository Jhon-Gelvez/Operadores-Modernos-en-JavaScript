export const registrarActividad = (actividad) => {
  try {
    const { nombre, fecha } = actividad;

    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida: faltan campos obligatorios.");
    }

    console.log(`Actividad "${nombre}" registrada para el ${fecha}.`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
