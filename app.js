const express = require("express");
const path = require("path");
const clientesRouter = require("./routes/clientes");
const productosRouter = require("./routes/productos");

const app = express();
const PORT = 3000;

// Configurar motor de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
  res.redirect("/productos");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
