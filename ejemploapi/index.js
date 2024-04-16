const express = require('express');
const app = express();
const port = 3000;

//body parser para leer los datos del formulario
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//base de datos
const db = require("./models");
db.sequelize.sync(/*{ force: true }*/).then(() => {
    console.log("db resync");
});
require("./routes")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});