const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    createdAt: {
        type: Date
    }
})

const Post = mongoose.model('Post', postSchema,'posts')

module.exports = Post