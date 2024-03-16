const express = require('express')
const pokeController = require('../Controllers/poke.controller.js')
const dotenv = require('dotenv')

router = express.Router()

dotenv.config()

function checkPassMiddleware(req, res, next) {
    const pass = req.body.pass
    const correctPass = process.env.PASS
    if(!pass || pass != correctPass) {
        return res.redirect('https://youtu.be/RfiQYRn7fBg?si=wbYghmj1dbwe4KLB')
    }
    next()
}
router.post('/insert', checkPassMiddleware, pokeController.insertPokemon)
router.get('/all', pokeController.getAllPokemons)
router.get('/:id', pokeController.getAPokemon)
router.all('*',(req,res) => {
    res.status(404).send('Page Not Found Error')
})

module.exports = router