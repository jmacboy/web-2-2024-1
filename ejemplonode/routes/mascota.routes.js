module.exports = app => {
    const controller = require("../controllers/mascota.controller.js");
    let router = require("express").Router();

    router.get("/", controller.listMascota);
    router.get("/create", controller.createMascota);
    router.post("/create", controller.insertMascota);
    router.get("/:id/edit", controller.editMascota);
    router.post("/:id/edit", controller.updateMascota);
    router.post('/:id/delete', controller.deleteMascota);
    router.get('/search', controller.searchMascota);
    app.use('/mascotas', router);
}