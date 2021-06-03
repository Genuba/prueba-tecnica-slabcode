const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(),`.env.${process.env.NODE_ENV.trim()}`)});

//  settings 
const app = express();
app.set('port', process.env.NODE_PORT || 3000);
app.set('json spaces', 2);

//  starting the server 
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//  middlewares
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next();
});

app.use(morgan('dev'));// formato dev que da informacion que datos responde con el inicio del servidor
app.use(express.urlencoded({ extended: false }));//metodo para aplicacion externa que envia datos a traves de formularios y lo entienda, 
//con una propiedad extended: false para entender los datos que vienen de los formularios inputs 
app.use(express.json());// metodo recibe formatos json

// routes
app.use('/api/eventos', require('./routes/evento'));
app.use('/api/colores', require('./routes/color'));
app.use('/api/lugares', require('./routes/lugar'));