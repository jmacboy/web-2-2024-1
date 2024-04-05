module.exports = app => {
    const controller = require("../controllers/auth.controller.js");
    let router = require("express").Router();

    router.get("/login", controller.getLogin);
    router.post("/login", controller.postLogin);
    router.post("/logout", controller.logout);
    router.get("/register", controller.getRegister);
    router.post("/register", controller.postRegister);
    app.use('/', router);
}