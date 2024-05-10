const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/persona.controller.js");
    let router = require("express").Router();

    router.get("/", checkUserMiddleware, controller.listPersonas);
    router.get("/:id", checkUserMiddleware, controller.getPersona);
    router.post("/", controller.createPersona);
    router.put("/:id", controller.updatePersona);
    router.patch("/:id", controller.updatePersona);
    router.delete("/:id", controller.deletePersona);
    router.post("/:id/profilepicture", controller.uploadProfilePicture);

    app.use('/api/personas', router);
}