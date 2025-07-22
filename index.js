//import "dotenv/config";
import dotenv from"dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT =5000;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mesasage: "Bienvenidos a la API REST." });
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

import authRouter from "./src/routes/auth.router.js";
app.use("/api/auth", authRouter);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));