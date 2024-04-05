const db = require("../models");

exports.checkUserMiddleware = async (req, res, next) => {
    if (!req.session.user) {
        res.redirect("/login");
        return;
    }
    const user = await db.usuarios.findOne({
        where: {
            id: req.session.user
        }
    });
    console.log("middleware user", user.email);
    res.locals.user = user;

    next();
}