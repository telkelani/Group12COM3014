const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (request, response) => response.send("HELLO API"))

app.listen(PORT, ()=> console.log(`Server running and listening on ${PORT}`))