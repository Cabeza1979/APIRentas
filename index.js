// se encarga solamente de levantar nuestro servidor
const server = require("./src/app.js");
const express = require("express");
const port = process.env.PORT || 3001 ;
// server.listen
server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});