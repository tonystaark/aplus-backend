'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const config = require('./config/index')
const app = express()

// import thread from './routes/thread'
const { createThread } = require('./services/createThread')
const { getAllThreads, getThreadsById } = require('./services/getThread')
const { updateThreadById } = require('./services/updateThread')
const { deleteThreadById } = require('./services/deleteThread')

const { createPost } = require('./services/createPost')
const { deletePostById } = require('./services/deletePost')
const { updatePostById } = require('./services/updatePost')
const { getAllPostsByThreadId } = require('./services/getPosts')

const { createReply } = require('./services/createReply')
const { updateReplyById } = require('./services/updateReply')
const { deleteReplyById } = require('./services/deleteReply')
const { getAllRepliesByThreadId } = require('./services/getReplies')

// const {postObject, getObject} = require('./routes')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// app.post('/object', postObject)
// app.get('/object/:key', getObject)
app.post('/thread', createThread)
app.put('/thread/:id',updateThreadById)
app.get('/threads', getAllThreads)
app.get('/threads/:id',getThreadsById)
app.delete('/thread/:id',deleteThreadById)

app.post('/post', createPost)
app.put('/post/:id', updatePostById)
app.delete('/post/:id', deletePostById)
app.get('/posts/:threadId', getAllPostsByThreadId)

app.post('/reply', createReply)
app.put('/reply/:id', updateReplyById)
app.delete('/reply/:id', deleteReplyById)
app.get('/replies/:threadId', getAllRepliesByThreadId)

app.listen(config.port, () => {
  console.log(`Server running on port: ${config.port}`)
})

module.exports = app