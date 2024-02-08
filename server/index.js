const express = require('express')
const cors = require('cors')
const postRouter = require('./routes/PostRoute')
const commentRouter = require('./routes/CommentRoute')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/../dist"))

app.use('/post', postRouter)
app.use('/comment', commentRouter)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})