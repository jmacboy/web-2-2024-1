module.exports = (sequelize, Sequelize) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: Sequelize.STRING,
        },
        persona_id: {
            type: Sequelize.INTEGER
        },
        tipo: {
            type: Sequelize.INTEGER,
            get() {
                switch (this.getDataValue('tipo')) {
                    case 0:
                        return 'Perro';
                    case 1:
                        return 'Gato';
                    case 2:
                        return 'Loro';
                    case 3:
                        return "Capibara";
                    default:
                        return 'No definido';
                }
            }
        }
    })
    return Mascota;
};