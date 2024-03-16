const poke = require('../Models/poke.model.js')

// insert

async function insertPokemon(req, res) {
    const pokemon = req.body.pokemon
    await poke.insert(pokemon)
    .then(() => {
        res.status(201).send('inserted successfully')
    })
    .catch(e => {
        console.log(e.message);
        res.status(500).send('error in insertion')
    })
}

async function getAllPokemons(req, res) {
    await poke.fetchall()
        .then(() => {
            res.status(200).send('fetched all pokemons')
        }).catch(e => {
            console.log(e.message);
            res.status(500).send('error in fetching all pokemons')
        })
}

async function getAPokemon(req, res, next) {
    const id = req.params.id
    await poke.fetchById(id)
        .then((p) => {
            if(p == null) {
                next()
            } else {
                res.status(200).send(`fetched pokemon with id/name: ${id}`)
            }
        }).catch(e => {
            console.log(e.message);
            res.status(500).send(`error in fetching pokemon with id: ${id}`)
        })
}

module.exports = {
    insertPokemon,
    getAllPokemons,
    getAPokemon
}