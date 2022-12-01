const { Router } = require("express");

const crmRouter = Router(); 


crmRouter.put("/",(req, res)=>{
    const {codigocaso, statuscode, EsFinalizado, Cuit} = req.body;
   try {
    if (!codigocaso || !statuscode || !EsFinalizado || !Cuit) throw Error("missing info");
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

crmRouter.get("/",(req, res)=>{
    try {
     res.status(200).json("Vaya por PUT...");
    } catch (error) {
     return res.status(400).json(error);
    }
 });
 
module.exports = crmRouter;