const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(compression())

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/health', (req, res) => {
  const response = {
    status: 'UP',
    uptime: process.uptime()
  }
  res.status(200).json(response)
})

app.get('/*', (req, res) => {
  console.log(`serving request for path ${req.url}`)
  res.sendFile(path.join(__dirname, 'dist/index.html'), (err) => {
    if (err) {
      console.error(`Something went wrong when handling ${req.url} - ${err}`)
      res.status(500).send(err)
    }
  })
})

const port = 8080
app.listen(port)
console.log(`Listening on port ${port}`)
