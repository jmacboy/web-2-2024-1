
module.exports = app => {
    const controller = require("../controllers/persona.controller.js");
    let router = require("express").Router();

    router.get("/", controller.listPersonas);
    router.post("/", controller.createPersona);
    router.delete("/:id", controller.deletePersona);
    app.use('/api/personas', router);
}