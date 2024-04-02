const cryptoUtils = require("../utils/crypto.utils");
const db = require("../models");

exports.getLogin = (req, res) => {
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
    console.log(user);
    if (user) {
        req.session.user = user;
        res.redirect("/");
    } else {
        res.redirect("/login");
    }
}