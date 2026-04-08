const express = require("express");
const path = require("path");
const clientesRouter = require("./routes/clientes");
const productosRouter = require("./routes/productos");

const app = express();
const PORT = 9000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
  res.redirect("/productos");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/clientes", clientesRouter);
app.use("/productos", productosRouter);

app.get("/", (req, res) => {
  res.redirect("/productos");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
