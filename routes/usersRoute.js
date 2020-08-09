const UsersRouter = require('express').Router()

UsersRouter.param('userID', (req, res, next, userID) => {
    req.userID = userID;
    next();
})

UsersRouter.get('/', (req, res,next) => res.send('devolver todos los usuarios'));

UsersRouter.route('/:userID')
    .get((req,res,next) => res.send(`Buscar al usuario: ${req.userID}`))
    .post((req, res, next) => res.send(`Postear el usuario: ${req.userID}`))
    .delete((req, res, next) => res.send(`Eliminar al usuario: ${req.userID}`))
    .patch((req, res, next) => res.send(`realizar un patch al usuario: ${req.userID}`))
    .put((req, res, next) => res.send(`realizar un put al usuario: ${req.userID}`));

module.exports = UsersRouter