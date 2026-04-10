// apropiacion
import { procesarPedido } from "./apropiacion/ejercicio1.js";
import { agregarInventario } from "./apropiacion/ejercicio2.js";
import { registrarActividad } from "./apropiacion/ejercicio3.js";

// transferencia
import { crearEstudiante } from "./transferencia/ejercicio1.js";
import { fusionarCatalogos } from "./transferencia/ejercicio2.js";

// apropiacion

console.log(procesarPedido({ cliente: "Ana", producto: "Laptop", cantidad: 1 }, "Funda", "Mouse"));
const inventario = ["cámara", "trípode", "micrófono"];
console.log(agregarInventario(inventario, "Lente 50mm"));
registrarActividad({ nombre: "Mantenimiento", fecha: "2026-04-15" });

// transferencia
console.log(crearEstudiante("Luis", 85, 90, 90, 90));

const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

const catalogoFinal = fusionarCatalogos(catalogoA, catalogoB);
console.log(catalogoFinal);