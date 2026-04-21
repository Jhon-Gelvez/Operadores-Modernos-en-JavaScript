export const estadisticas = (jugadores) => {
    try {
        
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("Datos inválidos");
        }

        jugadores.forEach(j => {
            if (!j.nombre || !j.stats || typeof j.stats.puntos !== "number") {
                throw new Error("Estructura de jugador inválida");
            }
        });

        const [
            {
                stats: { puntos: puntosPrimerJugador }
            }
        ] = jugadores;

        const listaJugadores = jugadores.map(j => ({ ...j }));
        const puntosTotales = jugadores.reduce((acc, j) => {
            return acc + j.stats.puntos;
        }, 0);
        return {
            puntosPrimerJugador,
            puntosTotales,
            jugadores: listaJugadores
        };

    } catch (error) {
        return {
            error: error.message
        };
    }
};