const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/mascota.controller.js");
    let router = require("express").Router();

    router.get("/", checkUserMiddleware, controller.listMascotas);
    router.get("/:id", checkUserMiddleware, controller.getMascota);
    router.post("/", checkUserMiddleware, controller.createMascota);
    router.put("/:id", checkUserMiddleware, controller.updateMascota);
    router.patch("/:id", checkUserMiddleware, controller.updateMascota);
    router.delete("/:id", checkUserMiddleware, controller.deleteMascota);
    
    app.use('/api/mascotas', router);
}