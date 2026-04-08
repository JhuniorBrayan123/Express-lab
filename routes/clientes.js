const express = require("express");
const router = express.Router();

// Datos de ejemplo
let clientes = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@example.com",
    telefono: "123456789",
  },
  {
    id: 2,
    nombre: "María García",
    email: "maria@example.com",
    telefono: "987654321",
  },
  {
    id: 3,
    nombre: "Carlos López",
    email: "carlos@example.com",
    telefono: "456789123",
  },
];

// GET - Listar todos los clientes
router.get("/", (req, res) => {
  res.render("clientes", {
    mensaje: "Lista de clientes",
    total: clientes.length,
    datos: clientes,
  });
});

// GET - Obtener un cliente por ID
router.get("/:id", (req, res) => {
  const cliente = clientes.find((c) => c.id == req.params.id);
  if (!cliente) {
    return res.status(404).json({ error: "Cliente no encontrado" });
  }
  res.json(cliente);
});

// POST - Crear un nuevo cliente
router.post("/", (req, res) => {
  const nuevoCliente = {
    id: clientes.length > 0 ? Math.max(...clientes.map((c) => c.id)) + 1 : 1,
    nombre: req.body.nombre || "Cliente sin nombre",
    email: req.body.email || "sin-email@example.com",
    telefono: req.body.telefono || "N/A",
  };
  clientes.push(nuevoCliente);
  res.status(201).json({ mensaje: "Cliente creado", cliente: nuevoCliente });
});

// DELETE - Eliminar un cliente
router.delete("/:id", (req, res) => {
  const index = clientes.findIndex((c) => c.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Cliente no encontrado" });
  }
  const clienteEliminado = clientes.splice(index, 1);
  res.json({ mensaje: "Cliente eliminado", cliente: clienteEliminado[0] });
});

module.exports = router;
