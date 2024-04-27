const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.personas = require("./persona.model")(sequelize, Sequelize);
db.mascotas = require("./mascota.model")(sequelize, Sequelize);
db.personas.hasMany(db.mascotas, { as: "mascotas", foreignKey: "persona_id", onDelete: "CASCADE"});
db.mascotas.belongsTo(db.personas, {
    foreignKey: "persona_id",
    as: "persona",
});
db.usuarios = require("./usuario.model")(sequelize, Sequelize);
module.exports = db;