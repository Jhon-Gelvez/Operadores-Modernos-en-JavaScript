export const actualizarPerfil = (perfil, ...nuevosDatos) => {
    
    const perfilActualizado = nuevosDatos.reduce((acc, dato) => {
        return {
            ...acc,
            ...dato
        };
    }, { ...perfil });

    return perfilActualizado;
};