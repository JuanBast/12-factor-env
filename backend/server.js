const express = require('express')
const app = express()
const logger = require('./config/logger')

const PORT = 3000

app.listen(PORT, function() {
    logger.info("Server is running on Port: " + PORT)
    
    logger.error("Esto es un error");
    logger.warn("Esto es un warn");
    logger.info("Esto es un info");
    logger.http("Esto es un http");
    logger.verbose("Esto es un verbose");
    logger.debug("Esto es un debug");
    logger.silly("Esto es un silly");
})