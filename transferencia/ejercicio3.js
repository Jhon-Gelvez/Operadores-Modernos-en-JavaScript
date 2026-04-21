export const procesarCompra = (cliente, productos) => {
    try {

        if (!cliente?.nombre || !cliente?.correo) {
            throw new Error("Cliente inválido");
        }

        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("Productos inválidos");
        }

        productos.forEach(p => {
            if (!p.nombre || typeof p.precio !== "number") {
                throw new Error("Producto inválido");
            }
        });

        const clienteInfo = { ...cliente };

        const [primerProducto, ...restoProductos] = productos;

        const totalProductos = productos.length;

        const precioTotal = productos.reduce((acc, p) => {
            return acc + p.precio;
        }, 0);
        return {
            cliente: clienteInfo,
            totalProductos,
            precioTotal,
            primerProducto
        };

    } catch (error) {
        return {
            error: error.message
        };
    }
};