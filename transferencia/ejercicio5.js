export const configFinal = (...configs) => {
  try {
   
    if (!configs.every(c => typeof c === 'object' && c !== null)) {
      throw "Error: Uno de los elementos no es un objeto";
    }

    // Unimos todo en un objeto final con spread y agregamos la propiedad
    const final = { ...configs[0], ...configs[1], ...configs[2], validacion: true };
    
    return final;

  } catch (error) {
    return { error, validacion: false };
  }
};