module.exports = app => {
    const controller = require("../controllers/persona.controller.js");
    let router = require("express").Router();

    router.get("/", controller.listPersona);
    router.get("/create", controller.createPersona);
    router.post("/create", controller.insertPersona);
    router.get("/:id/edit", controller.editPersona);
    router.post("/:id/edit", controller.updatePersona);
    router.post('/:id/delete', controller.deletePersona);
    router.get('/search', controller.searchPersona);
    app.use('/personas', router);
}