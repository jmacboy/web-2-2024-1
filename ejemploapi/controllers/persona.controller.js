const db = require("../models");
const { checkRequiredFields, sendError500 } = require("../utils/request.utils");

exports.listPersonas = async (req, res) => {
    try {
        const personas = await db.personas.findAll();
        res.send(personas);
    } catch (error) {
        sendError500(res, error);
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
        sendError500(res, error);
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
        sendError500(res, error);
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
        sendError500(res, error);
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
        sendError500(res, error);
    }
}
exports.uploadProfilePicture = async (req, res) => {
    const persona = await db.personas.findByPk(req.params.id);
    const imagen = req.files?.foto;
    if(!imagen){
        res.status(400).send({ message: "El campo foto es requerido" });
        return;
    }
    const nombreArchivo = `${persona.id}.png`;
    // eslint-disable-next-line no-undef
    imagen.mv(__dirname + `/../public/images/personas/${nombreArchivo}`);
    res.send({ message: "Foto subida correctamente" });
}