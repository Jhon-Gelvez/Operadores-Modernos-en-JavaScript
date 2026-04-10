import { procesarPedido } from "./apropiacion/ejercicio1.js";
import { agregarInventario } from "./apropiacion/ejercicio2.js";

console.log(procesarPedido({ cliente: "Ana", producto: "Laptop", cantidad: 1 }, "Funda", "Mouse"));

const inventario = ["cámara", "trípode", "micrófono"];
console.log(agregarInventario(inventario, "Lente 50mm"));
