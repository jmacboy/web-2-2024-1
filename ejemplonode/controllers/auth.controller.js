const cryptoUtils = require("../utils/crypto.utils");
const db = require("../models");

exports.getLogin = (req, res) => {
    if (req.session.user) {
        res.redirect("/");
        return;
    }
    res.render("auth/login.ejs");
}
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = cryptoUtils.stringToSha1(password);
    const user = await db.usuarios.findOne({
        where: {
            email: email,
            password: hashedPassword
        }
    });

    if (user) {
        console.log(user.id);
        req.session.user = user.id;
        res.redirect("/");
    } else {
        res.redirect("/login");
    }
}
exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/login");
}
exports.getRegister = (req, res) => {
    res.render("auth/register.ejs", { error: null });
}
exports.postRegister = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = cryptoUtils.stringToSha1(password);
    const userByEmail = await db.usuarios.findOne({
        where: {
            email: email
        }
    });
    if (userByEmail) {
        res.render("auth/register.ejs", { error: "El email ya está registrado" });
        return;
    }
    await db.usuarios.create({
        email: email,
        password: hashedPassword
    });
    res.redirect("/login");
}