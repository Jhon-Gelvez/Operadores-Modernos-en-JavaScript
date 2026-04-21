function configurarUsuario(defaults, personalizadas = {}, ...resto) {
    const configuracionFinal = {
        ...defaults,
        ...personalizadas,
        ...resto[0]
    };

    const { idioma } = configuracionFinal;
    return idioma;
}