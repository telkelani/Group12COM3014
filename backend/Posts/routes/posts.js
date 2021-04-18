const express = require('express')

const router = express.Router()
const Post = require('../models/Post')


//GET ALL POSTS
router.get('/all', async (request, response) => {
    
    try{
        const Posts = await Post.find();
        response.json(Posts)
    }

    catch(err){
        response.json({message: err})
    }
})

//GET BACK SPECIFIC POST
router.get('/:id', async (request,response) => {
    try {
        const post = await Post.findById(request.params.id) //ADD await as this may take some time to come from database
        response.json(post)
    }
    catch(err){
        response.json({message: err})
    }
})

//GET POST BY USER
router.get('/user/:userid', async (request, response) => {
    try{
        const PostsbyUser = await Post.find({user: request.params.userid})
        response.json(PostsbyUser)
    }
    catch(err){
        response.json({message:err})
    }
})


router.post('/newpost', async (request, response) => {
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

//DELETE POST
router.delete('/:id', async (request, response) => {
    try {
        const removedPost = await Post.deleteOne({_id: request.params.id})
        response.json(removedPost)
    }
    catch (err){
        response.json({message:err})
    }
})

//UPDATE POST
router.patch('/:id', async (request, response) => {
    try{
        const updatePost = await Post.updateOne({_id: request.params.id}, 
            {$set: {
                title: request.body.title,
                post: request.body.post,
                createdAt: new Date()
            }
        })
        response.json(updatePost)

    }
    catch(err){
        response.json({message: err})
    }
})

module.exports = router