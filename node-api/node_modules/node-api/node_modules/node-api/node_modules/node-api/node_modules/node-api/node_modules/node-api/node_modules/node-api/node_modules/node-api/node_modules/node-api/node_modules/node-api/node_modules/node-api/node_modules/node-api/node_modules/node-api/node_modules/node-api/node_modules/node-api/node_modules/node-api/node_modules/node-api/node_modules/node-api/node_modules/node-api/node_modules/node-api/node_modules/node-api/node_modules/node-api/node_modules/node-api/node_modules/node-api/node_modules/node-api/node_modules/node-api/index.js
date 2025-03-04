import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
<<<<<<< HEAD
import cors from 'cors';
=======
>>>>>>> a456875f9aebe15655f10744e467e717d65ad49c

const app = express();

app.use(bodyParser.json());
<<<<<<< HEAD

app.use(cors());

=======
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
>>>>>>> a456875f9aebe15655f10744e467e717d65ad49c

app.listen(5000, () => {
    console.log('Servidor escuchando en el puerto 5000');
})

const leerJson = () => {
    try{
        const datos = fs.readFileSync('./db.json');
        return JSON.parse(datos);
    } catch (error) {
        console.log(error);
    }
}

const escribirJson = (datos) => {
    try{
        fs.writeFileSync('./db.json', JSON.stringify(datos));
    } catch (error) {
        console.log(error);
    }
}

app.get("/api", (pet, res) => {
    res.json({ message: "Mensaje desde una petición GET a la ruta /api" , status: 200});
});

app.get("/api/productos", (pet, res) => {
    res.json(leerJson());
});


app.get("/api/productos/:id", (pet, res) => {
    try {
        const productos = leerJson();
        let id = parseInt(pet.params.id);
        const producto = productos.find((producto) => producto.id == id);
        res.json(producto);
    } catch (error) {
        res.json({ message: "Producto no encontrado", status: 404});
    }
});

app.post("/api/productos", (pet, res) => {
    const datos = leerJson();
    const body = pet.body;
    const nuevoProducto = {
        id: datos.length + 1,
        ...body
    }
    datos.push(nuevoProducto);
    escribirJson(datos);
    res.json({ message: "Producto añadido", status: 202});
})