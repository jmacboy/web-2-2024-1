const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/persona.controller.js");
    let router = require("express").Router();

    router.get("/", checkUserMiddleware, controller.listPersonas);
    router.get("/:id", checkUserMiddleware, controller.getPersona);
    router.post("/", checkUserMiddleware, controller.createPersona);
    router.put("/:id", checkUserMiddleware, controller.updatePersona);
    router.patch("/:id", checkUserMiddleware, controller.updatePersona);
    router.delete("/:id", checkUserMiddleware, controller.deletePersona);
    router.post("/:id/profilepicture", checkUserMiddleware, controller.uploadProfilePicture);
    router.get("/:id/mascotas", checkUserMiddleware, controller.getMascotasByPersona);

    app.use('/api/personas', router);
}