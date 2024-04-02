module.exports = app => {
    const controller = require("../controllers/auth.controller.js");
    let router = require("express").Router();

    router.get("/login", controller.getLogin);
    router.post("/login", controller.postLogin);
    app.use('/', router);
}