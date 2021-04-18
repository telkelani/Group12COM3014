const express = require('express')
const app = express()
const db = require('./db/db.js')

const PORT = 4000
const postsRoute = require('./routes/posts')

//These two lines are needed to interpret response in JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//This is going to be the default endpoint, postsRoute handles all the routes
app.use('/posts/api', postsRoute)



app.listen(PORT, ()=> console.log(`Server running and listening on ${PORT}`))