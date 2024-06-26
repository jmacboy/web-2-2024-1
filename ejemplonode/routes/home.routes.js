const { checkUserMiddleware } = require("../middlewares/check-user.middleware.js");

module.exports = app => {
    const controller = require("../controllers/home.controller.js");
    let router = require("express").Router();

    router.get("/", checkUserMiddleware, controller.dashboard);
    router.get("/hola", controller.hola);
    router.get("/form", controller.form);
    router.get("/result", controller.resultGet);
    router.post("/result", controller.resultPost);
    app.use('/', router);
}