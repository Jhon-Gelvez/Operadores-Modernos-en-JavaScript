export const analizarVentas = (ventas) => {

    const [
        {
            detalles: { precio, unidades }
        }
    ] = ventas;

    return precio * unidades;
};