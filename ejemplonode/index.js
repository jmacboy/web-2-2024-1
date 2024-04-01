const express = require('express');
const app = express();
const port = 3000;

//configuración del engine para ejs
app.set('view engine', 'ejs');

//body parser para leer los datos del formulario
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//carpetas estáticas
app.use(express.static('public'));
app.use(express.static('assets'));

//base de datos
const db = require("./models");
db.sequelize.sync(/*{ force: true }*/).then(() => {
    console.log("db resync");
});

require("./routes")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});