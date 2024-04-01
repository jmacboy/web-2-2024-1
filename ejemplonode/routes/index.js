module.exports = app => {
    // rutas de acceso
    require("./home.routes")(app);
    require("./persona.routes")(app);
    require("./mascota.routes")(app);
}