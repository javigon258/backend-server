//Requires
var { request, response } = require('express');

var mongoose = require('mongoose');

var express = require('express');

//Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/empresaDB', (err, response) =>{
    if(err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
})

//inicializa variables
var app = express();

//Rutas
app.get('/',(request,response, next) => {
    response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correcta'
    });
});

//Escuchar peticiones
app.listen(3000, () => {
    //console.log(`Example app listening at http://localhost:3000`) 
    console.log('Node/Express: \x1b[32m%s\x1b[0m', 'online');
  });
