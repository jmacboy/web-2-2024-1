exports.dashboard = (req, res) => {
    res.render("dashboard.ejs");
}
exports.hola = (req, res) => {
      // eslint-disable-next-line no-undef
      res.render("hola.ejs");
}
exports.form = (req, res) => {
     // eslint-disable-next-line no-undef
        res.render("form.ejs");
}
exports.resultGet = (req, res) => {
    res.send("El nombre ingresado en GET es: " + req.query.nombre);
}
exports.resultPost = (req, res) => {
    const obj = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        ciudad: req.body.ciudad,
        edad: req.body.edad,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero,
    };
    console.log(obj);
    res.send(
        "Nombre: " + obj.nombre + "<br/>" +
        "Apellido: " + obj.apellido + "<br/>" +
        "Ciudad: " + obj.ciudad + "<br/>" +
        "Edad: " + obj.edad + "<br/>" +
        "Fecha de Nacimiento: " + obj.fechaNacimiento + "<br/>" +
        "Género: " + obj.genero
    )
}