const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const mongo = require('./Mongo/Mongo.connect')
const pokeRouter = require('./Routers/poke.router.js')

PORT = 8000

app = express()

const server = http.createServer(app)

app.use(bodyParser.json());

app.use(pokeRouter)


async function startServer() {

    await mongo.mongoConnect()

    server.listen(PORT, () => console.log(`Pokemon server is running on port ${PORT}`))

}

startServer()