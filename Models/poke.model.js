const mongoose = require('mongoose')
const Pokemon = require('../Mongo/Pokemon.Schema.js')

// insert

async function insert(pokemon) {
    const filter = {
        name: pokemon.name
    }
    const update = pokemon

    await Pokemon.findOneAndUpdate(filter, update, {
        upsert: true
    })
}

// fetchall

async function fetchall() {
    const all = await Pokemon.find({}, 'dexNo name image type')
    return all
}

// fetchById

async function fetchById(id) {
    let query;
    if (!isNaN(id)) {
        query = { dexNo: id };
    } else {
        query = { name: id };
    }

    const poke = await Pokemon.findOne(query);
    return poke;
}

module.exports = {
    insert,
    fetchall,
    fetchById
}