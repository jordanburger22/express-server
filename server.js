const express = require('express')
const morgan = require('morgan')
const app = express()


app.use(express.json())
app.use(morgan('dev'))


app.use('/movies', require('./routes/movieRouter'))
app.use('/tvShows', require('./routes/tvShowRouter'))


app.listen(8000, () => console.log('Server is running on port 8000'))