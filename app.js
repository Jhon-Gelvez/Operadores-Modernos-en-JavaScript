import { procesarPedido } from "./apropiacion/ejercicio1.js";
import { agregarInventario } from "./apropiacion/ejercicio2.js";
import { registrarActividad } from "./apropiacion/ejercicio3.js";

console.log(procesarPedido({ cliente: "Ana", producto: "Laptop", cantidad: 1 }, "Funda", "Mouse"));

const inventario = ["cámara", "trípode", "micrófono"];
console.log(agregarInventario(inventario, "Lente 50mm"));

registrarActividad({ nombre: "Mantenimiento", fecha: "2026-04-15" });
