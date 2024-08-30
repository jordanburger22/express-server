const express = require('express')
const movieRouter = express.Router()
const { movies } = require('../data')

movieRouter.get('/', (req, res) => {
    res.send(movies)
})



module.exports = movieRouter