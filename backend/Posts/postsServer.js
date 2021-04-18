const express = require('express')
const app = express()
const db = require('./db/db.js')
const Post = require('./models/Post.js')
const PORT = 4000

//These two lines are needed to interpret response in JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (request, response) => {
    
    try{
        const Posts = await Post.find();
        response.json(Posts)
    }

    catch(err){
        response.json({message: err})
    }
})

app.post('/newpost', async (request, response) => {
    const submittedPost = request.body
    const now = new Date()
    const newPost = new Post(
        {
            title: submittedPost.title,
            post: submittedPost.post,
            user: submittedPost.user,
            createdAt: now
        })
    
    try{
        const savedPost = await newPost.save()
        response.json(savedPost)
    }
    catch (err) {
        response.json({error_message: err})
    }
})

app.listen(PORT, ()=> console.log(`Server running and listening on ${PORT}`))