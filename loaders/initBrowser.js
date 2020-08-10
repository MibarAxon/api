var open = require('open');

// specify the app to open in 
const openBrowser = async (port) => await open(`http://localhost:${port}/login`, {app: ['chrome','--incognito']});

module.exports = {
    openBrowser
}