const express = require("express");
const morgan = require("morgan");
const crmRouter = require("./routes/crmRouter");


const server = express(); //servidor creado
server.use(express.json());  // midellware para convertir los datos entrantes (body en json) a objetos JS
server.use(morgan("dev"));

server.use("/crm", crmRouter);

server.get("/", (req,res)=>{
    try {
        res.status(200).json("EWlcome to the jungle");
       } catch (error) {
        return res.status(400).json(error);
       }
});


module.exports = server;