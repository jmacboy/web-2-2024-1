const db = require("../models");
const { formatDate } = require("../utils/date.utils");
const { Op } = require("sequelize");

exports.listMascota = async (req, res) => {
    const mascotas = await db.mascotas.findAll({
        include: ["persona"]
    });
    res.render("mascotas/list.ejs", { mascotas: mascotas });
}
exports.createMascota = async(req, res) => {
    const personas = await db.personas.findAll();
    res.render("mascotas/form.ejs", { mascota: null, fechaConvertida: "", personas });
}
exports.insertMascota = async (req, res) => {
    await db.mascotas.create({
        nombre: req.body.nombre,
        persona_id: req.body.persona_id,
        tipo: req.body.tipo
    });
    res.redirect("/mascotas");
}
exports.editMascota = async (req, res) => {
    const mascota = await db.mascotas.findByPk(req.params.id, { include: ["persona"] });
    const fechaConvertida = formatDate(mascota.fechaNacimiento);
    const personas = await db.personas.findAll();
    res.render("mascotas/form.ejs", { mascota: mascota, fechaConvertida: fechaConvertida, personas: personas });
}
exports.updateMascota = async (req, res) => {
    await db.mascotas.update({
        nombre: req.body.nombre,
        persona_id: req.body.persona_id,
        tipo: req.body.tipo
    }, {
        where: {
            id: req.params.id
        }
    });
    res.redirect("/mascotas");
}
exports.deleteMascota = async (req, res) => {
    await db.mascotas.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect("/mascotas");
}
exports.searchMascota = async (req, res) => {
    const query = req.query.q;
    const mascotas = await db.mascotas.findAll({
        include: ["persona"],
        where: {
            [Op.or]: [
                { nombre: { [Op.substring]: query }, },
            ]
        }
    });
    res.render("mascotas/list.ejs", { mascotas: mascotas });
}