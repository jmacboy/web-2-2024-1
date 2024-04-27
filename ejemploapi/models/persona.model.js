module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("persona", {
        nombre: {
            type: Sequelize.STRING,
        },
        apellido: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        fechaNacimiento: {
            type: Sequelize.DATE
        },
        genero: {
            type: Sequelize.INTEGER
        },
        imageUrl: {
            type: Sequelize.VIRTUAL,
            get: function () {
                // eslint-disable-next-line no-undef
                return process.env.BASE_URL + 'images/personas/' + this.getDataValue('id') + '.png';
            }
        }
    })
    return Persona;
};