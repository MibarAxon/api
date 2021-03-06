require("dotenv").config();
const server = require('./server.js')
const port = process.env.PORT || 0 //al pasarle el puerto '0' se activa el sistema de asignacion automatica de puertos de node
const mongoDB = require('./loaders/initMongo.js')
const browser = require('./loaders/initBrowser')

server.listen(port, err => 
    err
        ? console.log(`an error has ocurred, there was an error turning on the server: `,err)
        : console.log(`running ${process.env.NODE_ENV } web-server on port ${server.address().port}`) 
        //imprimimos desde server.address el puerto para verificar que puerto nos 
        //asigna el sistema automatico de node (en caso de no pasarla como variable de ambiente)
        //si imprimimos el puerto tal cual esta ahi, nos va a dar que estamos en el puerto '0', y no es correcto
)

browser.openBrowser(server.address().port) //abrimos el browser con el login estatico en el puerto con el que levantamos el server

