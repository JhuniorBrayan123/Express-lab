const express = require("express");
const router = express.Router();

// Datos de ejemplo
let productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1200,
    cantidad: 10,
    categoria: "Electrónica",
  },
  { id: 2, nombre: "Mouse", precio: 25, cantidad: 50, categoria: "Accesorios" },
  {
    id: 3,
    nombre: "Teclado",
    precio: 75,
    cantidad: 30,
    categoria: "Accesorios",
  },
  {
    id: 4,
    nombre: "Monitor",
    precio: 300,
    cantidad: 15,
    categoria: "Electrónica",
  },
];

// GET - Listar todos los productos
router.get("/", (req, res) => {
  res.json({
    mensaje: "Lista de productos",
    total: productos.length,
    datos: productos,
  });
});

// GET - Obtener un producto por ID
router.get("/:id", (req, res) => {
  const producto = productos.find((p) => p.id == req.params.id);
  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(producto);
});

// POST - Crear un nuevo producto
router.post("/", (req, res) => {
  const nuevoProducto = {
    id: productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1,
    nombre: req.body.nombre || "Producto sin nombre",
    precio: req.body.precio || 0,
    cantidad: req.body.cantidad || 0,
    categoria: req.body.categoria || "Sin categoría",
  };
  productos.push(nuevoProducto);
  res.status(201).json({ mensaje: "Producto creado", producto: nuevoProducto });
});

// DELETE - Eliminar un producto
router.delete("/:id", (req, res) => {
  const index = productos.findIndex((p) => p.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  const productoEliminado = productos.splice(index, 1);
  res.json({ mensaje: "Producto eliminado", producto: productoEliminado[0] });
});

module.exports = router;
