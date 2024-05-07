module.exports = (sequelize, Sequelize) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: Sequelize.STRING,
        },
        persona_id: {
            type: Sequelize.INTEGER
        },
        tipo: {
            type: Sequelize.INTEGER
        }
    })
    return Mascota;
};