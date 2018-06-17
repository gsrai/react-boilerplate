const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, 'dist')))

const port = 8080
app.listen(port)
console.log(`Listening on port ${port}`)
