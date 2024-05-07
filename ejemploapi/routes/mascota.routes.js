
module.exports = app => {
    const controller = require("../controllers/mascota.controller.js");
    let router = require("express").Router();

    router.get("/", controller.listMascotas);
    router.get("/:id", controller.getMascota);
    router.post("/", controller.createMascota);
    router.put("/:id", controller.updateMascota);
    router.patch("/:id", controller.updateMascota);
    router.delete("/:id", controller.deleteMascota);

    app.use('/api/mascotas', router);
}