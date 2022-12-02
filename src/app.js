const express = require("express");
const morgan = require("morgan");
const crmRouter = require("./routes/crmRouter");


const server = express(); //servidor creado
server.use(express.json());  // midellware para convertir los datos entrantes (body en json) a objetos JS
server.use(morgan("dev"));

server.put("/00",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
    const Fecha = new Date();
    Fecha.toISOString;
   try {
    const response = {
        CodigoError: "UCE-00",
        Descripcion: "No ha sido posible actualizar el estado",
        Fecha,
    };
    res.status(200).json(response);

   } catch (error) {
    return res.status(404).json(error);
   }
});

server.put("/01",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
    const Fecha = new Date();
    Fecha.toISOString;
   try {
    const response = {
        CodigoError: "UCE-01",
        Descripcion: "Estado actualizado correctamente",
        Fecha,
    };
    res.status(200).json(response);

   } catch (error) {
    return res.status(404).json(error);
   }
});

server.put("/02",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
    const Fecha = new Date();
    Fecha.toISOString;
   try {
    const response = {
        CodigoError: "UCE-02",
        Descripcion: "No existe el caso Jelou",
        Fecha,
    };
    res.status(200).json(response);

   } catch (error) {
    return res.status(404).json(error);
   }
});

server.put("/03",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
    const Fecha = new Date();
    Fecha.toISOString;
   try {
    const response = {
        CodigoError: "UCE-02",
        Descripcion: `El usuario cuit ${Cuit} no coincide con el propietario del caso`,
        Fecha,
    };
    res.status(200).json(response);

   } catch (error) {
    return res.status(404).json(error);
   }
});
server.put("/crm",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
    console.log(req.body);
   try {
   
    const response = 
        {
            codigocaso,
            statuscode,
            EsFinalizado,
             Cuit
        };
        console.log(response);
    res.status(200).json(response);

   } catch (error) {
    return res.status(400).json(error);
   }
});

module.exports = server;