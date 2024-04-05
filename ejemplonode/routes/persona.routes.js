const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/persona.controller.js");
    let router = require("express").Router();

    router.get("/",checkUserMiddleware, controller.listPersona);
    router.get("/create",checkUserMiddleware, controller.createPersona);
    router.post("/create",checkUserMiddleware, controller.insertPersona);
    router.get("/:id/edit",checkUserMiddleware, controller.editPersona);
    router.post("/:id/edit",checkUserMiddleware, controller.updatePersona);
    router.post('/:id/delete',checkUserMiddleware, controller.deletePersona);
    router.get('/search',checkUserMiddleware, controller.searchPersona);
    app.use('/personas', router);
}