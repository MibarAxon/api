const mockAPI = require('express').Router();
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
const glob = require('glob');

mockAPI.get('/',(req,res) => res.send('llegamos a las rutas de la mock API'))

module.exports = mockAPI;