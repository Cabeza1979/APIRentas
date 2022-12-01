// se encarga solamente de levantar nuestro servidor
const server = require("./src/app.js");

// server.listen
server.listen("3001", () => {
    console.log("server listening on port 3001");
});