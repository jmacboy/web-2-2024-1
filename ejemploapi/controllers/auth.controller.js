const db = require("../models");
const { generarTokenUsuario } = require("../utils/code.utils");
const { stringToSha1 } = require("../utils/crypto.utils");
const { checkRequiredFields } = require("../utils/request.utils");

exports.generateUserToken = async (req, res) => {
    const requiredFields = ["email", "password"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if (fieldsWithErrors.length > 0) {
        res.status(400).send({
            message:
                `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
        });
        return;
    }

    const { email, password } = req.body;

    const usuario = await db.usuarios.findOne({
        where: {
            email,
            password: stringToSha1(password)
        }
    });
    if (!usuario) {
        res.status(401).send({ message: "Usuario o contraseña incorrectos" });
        return;
    }
    const token = generarTokenUsuario();
    await db.tokens.create({
        token,
        usuario_id: usuario.id
    });
    res.send({ token });
}
exports.registerUser = async (req, res) => {
    const requiredFields = ["email", "password"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if (fieldsWithErrors.length > 0) {
        res.status(400).send({
            message:
                `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
        });
        return;
    }
    const { email, password } = req.body;
    const usuarioDB = await db.usuarios.findOne({
        where: {
            email
        }
    });
    if (usuarioDB) {
        res.status(400).send({
            message: "El email ya está registrado"
        });
        return;
    }
    const usuario = await db.usuarios.create({
        email,
        password: stringToSha1(password)
    });
    usuario.password = undefined;
    res.send(usuario);
}