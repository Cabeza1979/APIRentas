const express = require("express");
const morgan = require("morgan");
const crmRouter = require("./routes/crmRouter");


const server = express(); //servidor creado
server.use(express.json());  // midellware para convertir los datos entrantes (body en json) a objetos JS
server.use(morgan("dev"));

server.post("/rentas",(req, res)=>{
    const {cuenta, fecha_operacion, nomenclatura, vigencia_desde} = req.body;
    var cuenta_in = cuenta;
    var fechaVigenciaDesde=vigencia_desde;
    var condicion="NP";
    
    try {
       if(cuenta_in%2){
            condicion="P";
            fechaVigenciaDesde="01/01/2025";
       }
        
        const response = {
            status: {
                action: null,
                messages: [
                    {
                        type: "success",
                        description: "OK",
                        code: ""
                    }
                ],
                appId: "044",
                success: "TRUE"
            },
            data: {
                condicion,
                fechaVigenciaDesde
            }       
        };
       
    res.status(200).json(response);

   } catch (error) {
    return res.status(404).json(error);
   }
});

module.exports = server;