const db = require("../models");
const { checkRequiredFields, sendError500 } = require("../utils/request.utils");

exports.listPersonas = async (req, res) => {
    try {
        const personas = await db.personas.findAll();
        res.send(personas);
    } catch (error) {
        sendError500(res);
    }
}
exports.getPersona = async (req, res) => {
    const id = req.params.id;
    try {
        const persona = await db.personas.findByPk(id);
        if (!persona) {
            res.status(404).send({ message: "Persona no encontrada" });
            return;
        }
        res.send(persona);
    } catch (error) {
        sendError500(res);
    }
}
exports.createPersona = async (req, res) => {
    const requiredFields = ["nombre", "apellido", "edad",
        "email", "telefono", "fechaNacimiento", "genero"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if (fieldsWithErrors.length > 0) {
        res.status(400).send({
            message:
                `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
        });
        return;
    }
    try {
        const persona = await db.personas.create(req.body);
        res.send(persona);
    } catch (error) {
        sendError500(res);
    }
}
exports.updatePersona = async (req, res) => {
    const id = req.params.id;
    try {

        const persona = await db.personas.findByPk(id);
        if (!persona) {
            res.status(404).send({ message: "Persona no encontrada" });
            return;
        }
        if (req.method === "PUT") {
            const requiredFields = ["nombre", "apellido", "edad", "email",
                "telefono", "fechaNacimiento", "genero"];
            const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
            if (fieldsWithErrors.length > 0) {
                res.status(400).send({
                    message: `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
                });
                return;
            }
        }

        await persona.update(req.body);
        res.send(persona);
    } catch (error) {
        sendError500(res);
    }
}
exports.deletePersona = async (req, res) => {
    const id = req.params.id;
    try {

        const persona = await db.personas.findByPk(id);
        if (!persona) {
            res.status(404).send({ message: "Persona no encontrada" });
            return;
        }
        await persona.destroy();
        res.send({ message: "Persona eliminada correctamente" });
    } catch (error) {
        sendError500(res);
    }
}