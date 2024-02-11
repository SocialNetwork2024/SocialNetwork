const jwt=require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const postRouter = require('./routes/PostRoute')
const userRouter=require('./routes/UsersRoute')
const commentRouter = require('./routes/CommentRoute')
const likeRouter = require('./routes/LikeRoute')
// const UsersRouter=require('./routes/UsrRoute')
const PORT = 3000
const app = express()

app.use(cors())
const bcrypt=require('bcrypt')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/like', likeRouter)
app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})