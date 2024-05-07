const db = require("../models");
const { checkRequiredFields, sendError500 } = require("../utils/request.utils");

exports.listMascotas = async (req, res) => {
    try {
        const mascotas = await db.mascotas.findAll({
            include: [
                "persona"
            ]
        });
        res.send(mascotas);
    } catch (error) {
        sendError500(res, error);
    }
}
exports.getMascota = async (req, res) => {
    const id = req.params.id;
    try {
        const mascota = await db.mascotas.findByPk(id);
        if (!mascota) {
            res.status(404).send({ message: "Mascota no encontrada" });
            return;
        }
        res.send(mascota);
    } catch (error) {
        sendError500(res, error);
    }
}
exports.createMascota = async (req, res) => {
    const requiredFields = ["nombre", "persona_id", "tipo"];
    const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
    if (fieldsWithErrors.length > 0) {
        res.status(400).send({
            message:
                `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
        });
        return;
    }
    try {
        const mascota = await db.mascotas.create(req.body);
        res.send(mascota);
    } catch (error) {
        sendError500(res, error);
    }
}
exports.updateMascota = async (req, res) => {
    const id = req.params.id;
    try {

        const mascota = await db.mascotas.findByPk(id);
        if (!mascota) {
            res.status(404).send({ message: "Mascota no encontrada" });
            return;
        }
        if (req.method === "PUT") {
            const requiredFields = ["nombre", "persona_id", "tipo"];
            const fieldsWithErrors = checkRequiredFields(requiredFields, req.body);
            if (fieldsWithErrors.length > 0) {
                res.status(400).send({
                    message: `Faltan los siguientes campos: ${fieldsWithErrors.join(", ")}`
                });
                return;
            }
        }

        await mascota.update(req.body);
        res.send(mascota);
    } catch (error) {
        sendError500(res, error);
    }
}
exports.deleteMascota = async (req, res) => {
    const id = req.params.id;
    try {

        const mascota = await db.mascotas.findByPk(id);
        if (!mascota) {
            res.status(404).send({ message: "Mascota no encontrada" });
            return;
        }
        await mascota.destroy();
        res.send({ message: "Mascota eliminada correctamente" });
    } catch (error) {
        sendError500(res, error);
    }
}
