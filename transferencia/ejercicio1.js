export const crearEstudiante = (nombre, ...notas) => {
    try {
        if (!nombre) {
            throw new Error("El nombre del estudiante es obligatorio.");
        }

        // Validación: Comprobar que todas las entradas en el array notas sean números
        if (notas.some((n) => typeof n !== "number")) {
            throw new Error("Todas las notas deben ser valores numéricos.");
        }

        // Destructuración: Extraer la primera nota y agrupar el resto
        const [primeraNota, ...restoNotas] = [...notas];

        // Cálculo del promedio del resto de las notas
        const sumaResto = restoNotas.reduce((acc, nota) => acc + nota, 0);
        const promedioResto = restoNotas.length > 0 ? sumaResto / restoNotas.length : 0;

        // Retorno de objeto inmutable
        return {
            nombre,
            primeraNota,
            promedioResto: Number(promedioResto.toFixed(2)),
            totalNotas: notas.length,
        };
    } catch (error) {
        console.error(`Error en registro: ${error.message}`);
    }
};

