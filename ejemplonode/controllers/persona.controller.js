const db = require("../models");
const { formatDate } = require("../utils/date.utils");
const { Op } = require("sequelize");

exports.listPersona = async (req, res) => {
    const personas = await db.personas.findAll({
        include: ["mascotas"]
    });
    res.render("personas/list.ejs", { personas: personas });
}
exports.createPersona = (req, res) => {
    res.render("personas/form.ejs", { persona: null, fechaConvertida: "" });
}
exports.insertPersona = async (req, res) => {
    await db.personas.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
        telefono: req.body.telefono,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero
    });
    res.redirect("/personas");
}
exports.editPersona = async (req, res) => {
    const persona = await db.personas.findByPk(req.params.id);
    const fechaConvertida = formatDate(persona.fechaNacimiento);
    console.log(persona);
    res.render("personas/form.ejs", { persona: persona, fechaConvertida: fechaConvertida });
}
exports.updatePersona = async (req, res) => {
    await db.personas.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad,
        email: req.body.email,
        telefono: req.body.telefono,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect("/personas");
}
exports.deletePersona = async (req, res) => {
    await db.personas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect("/personas");
}
exports.searchPersona = async (req, res) => {
    const query = req.query.q;
    const personas = await db.personas.findAll({
        where: {
            [Op.or]: [
                { nombre: { [Op.substring]: query }, },
                { apellido: { [Op.substring]: query } }
            ]
        }
    });
    res.render("personas/list.ejs", { personas: personas });
}
exports.getFotoPerfil = async (req, res) => {
    const persona = await db.personas.findByPk(req.params.id);
    res.render("personas/profilepicture.ejs", { persona: persona });
}
exports.uploadFotoPerfil = async (req, res) => {
    const persona = await db.personas.findByPk(req.params.id);
    const imagen = req.files?.foto;
    if(!imagen){
        res.redirect("/personas");
        return;
    }
    const nombreArchivo = `${persona.id}.png`;
    imagen.mv(__dirname + `/../public/images/personas/${nombreArchivo}`);
    res.redirect("/personas");
}
