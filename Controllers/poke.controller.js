const poke = require('../Models/poke.model.js')

// insert

async function insertPokemon(req, res) {
    const pokemon = req.body.pokemon
    console.log('poke received:\n', pokemon);
    await poke.insert(pokemon)
    .then(() => {
        res.send('inserted successfully')
    })
    .catch(e => {
        console.log('err: ', e);
        res.status(500).send('err in insertion')
    })
}

async function getAllPokemons(req, res) {
    await poke.fetchall()
        .then(pokemons => {
            console.log(pokemons);
            res.send('fetched all pokemons')
        }).catch(e => {
            console.log(e);
            res.status(500).send('error in fetching all pokemons')
        })
}

async function getAPokemon(req, res) {
    const id = req.params.id
    await poke.fetchById(id)
        .then(pokemon => {
            console.log(pokemon);
            res.send(`fetched pokemon with id: ${id}`)
        }).catch(e => {
            console.log(e);
            res.status(500).send(`err in fetching pokemon with id: ${id}`)
        })
}

module.exports = {
    insertPokemon,
    getAllPokemons,
    getAPokemon
}