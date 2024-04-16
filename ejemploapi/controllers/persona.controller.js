const db = require("../models");

exports.listPersonas = async (req, res) => {
    const personas = await db.personas.findAll();
    res.send(personas);
}
exports.createPersona = async (req, res) => {
    const persona = await db.personas.create(req.body);
    res.send(persona);
}
exports.deletePersona = async (req, res) => {
    const id = req.params.id;
    const persona = await db.personas.findByPk(id);
    await persona.destroy();
    res.send({ message: "Persona eliminada correctamente" });
}
