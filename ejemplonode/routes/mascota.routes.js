const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/mascota.controller.js");
    let router = require("express").Router();

    router.get("/",checkUserMiddleware, controller.listMascota);
    router.get("/create",checkUserMiddleware, controller.createMascota);
    router.post("/create",checkUserMiddleware, controller.insertMascota);
    router.get("/:id/edit",checkUserMiddleware, controller.editMascota);
    router.post("/:id/edit",checkUserMiddleware, controller.updateMascota);
    router.post('/:id/delete',checkUserMiddleware, controller.deleteMascota);
    router.get('/search',checkUserMiddleware, controller.searchMascota);
    app.use('/mascotas', router);
}