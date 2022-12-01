const express = require("express");
const morgan = require("morgan");
const crmRouter = require("./routes/crmRouter");


const server = express(); //servidor creado
server.use(express.json());  // midellware para convertir los datos entrantes (body en json) a objetos JS
server.use(morgan("dev"));

server.use("/crm", crmRouter);

// server.get("/", (req,res)=>{
//     try {
//         res.status(200).json("Welcome to the jungle");
//        } catch (error) {
//         return res.status(400).json(error);
//        }
// });

server.get("/",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
   try {
    // if (!codigocaso || !statuscode || !EsFinalizado || !Cuit) throw Error("missing info");
    const response = {
        CodigoError: "UCE-01",
        Descripcion: "Estado actualizado correctamente",
        Fecha: "2022-11-02T12:45:30.764Z"
    };
    res.status(200).json(response);

   } catch (error) {
    return res.status(400).json(error);
   }
});

server.get("/crm",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
   try {
   
    const response = 
        {
            codigocaso:codigocaso,
            statuscode,
            EsFinalizado,
            Cuit
        };
    res.status(200).json(response);

   } catch (error) {
    return res.status(400).json(error);
   }
});

module.exports = server;