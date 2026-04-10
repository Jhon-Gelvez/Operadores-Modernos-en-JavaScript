export const fusionarCatalogos = (a, b) => {
    try {
        // Validación de tipos de datos
        if (!Array.isArray(a) || !Array.isArray(b)) {
            throw new Error("Ambos parámetros deben ser arreglos (arrays).");
        }

        // Spread para fusionar y sort para ordenar por precio ascendente
        // Se usa [...a, ...b] para no mutar los catálogos originales
        const catalogoFusionado = [...a, ...b];
        catalogoFusionado.sort((item1, item2) => item1.precio - item2.precio);

        return catalogoFusionado;
    } catch (error) {
        console.error(`Error de fusión: ${error.message}`);
    }
};
