
module.exports = app => {
    const controller = require("../controllers/auth.controller.js");
    let router = require("express").Router();

    router.post("/login", controller.generateUserToken);
    router.post("/register", controller.registerUser);

    app.use('/api/', router);
}