import express from "express";
const app = express()

app.get("/",(req,res) => {
    res.json({mesasage:"Bienvenidos a la API REST"});
});


const PORT = 5000

app.listen (PORT, () => console.log(`http://localhost:${PORT}`));
