require("dotenv").config();
const server = require('./server.js')
const port = process.env.PORT || 2000

server.listen(port, () => console.log(`running ${process.env.NODE_ENV} web-server on port ${port}`))