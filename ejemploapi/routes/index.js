module.exports = app => {
    // rutas de acceso
    require("./persona.routes")(app);
    require("./mascota.routes")(app);
    require("./auth.routes")(app);
}