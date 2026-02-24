import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.all('/DevOps', (req, res) => {

    // Solo permitir método POST
    if (req.method !== 'POST') {
        return res.status(400).json({ error: "ERROR" });
    }

    const expectedBody = {
        message: "This is a test",
        to: "Juan Perez",
        from: "Rita Asturia",
        timeToLifeSec: 45
    };

    const body = req.body;

    // Validación EXACTA del body
    const isValid =
        body &&
        body.message === expectedBody.message &&
        body.to === expectedBody.to &&
        body.from === expectedBody.from &&
        body.timeToLifeSec === expectedBody.timeToLifeSec &&
        Object.keys(body).length === 4;

    if (!isValid) {
        return res.status(400).json({ error: "ERROR" });
    }

    // Respuesta válida
    return res.status(200).json({
        message: `Hello ${body.to} your message will be sent`
    });
});

// Cualquier otra ruta devuelve error
app.use((req, res) => {
    res.status(400).json({ error: "ERROR" });
});



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
