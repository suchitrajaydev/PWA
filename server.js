const express = require('express')
var path = require('path')
const app = express()
const HOST = '0.0.0.0';
const port = 8080


app.use(express.static('./'))

// app.use(express.static('js'))

// app.use(express.static('images'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(port, () => console.log(`App running on http://${HOST}:${port}!`))
