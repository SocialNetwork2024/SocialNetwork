const express = require('express')
const cors = require('cors')
const postRouter = require('./routes/PostRoute')
const commentRouter = require('./routes/CommentRoute')
const likeRouter = require('./routes/LikeRoute')
const userRouter = require('./routes/UserRoute')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/../dist"))

app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/like', likeRouter)
app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})