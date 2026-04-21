export const configurarUsuario = (defaults, personalizadas = {}, ...resto) => {
    // Mezcla sin mutar
    const configuracionFinal = {
        ...defaults,
        ...personalizadas,
        ...resto[0]
    };

    // Destructuración
    const { idioma } = configuracionFinal;

    return idioma;
};