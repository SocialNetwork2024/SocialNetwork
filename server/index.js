const jwt=require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const postRouter = require('./routes/PostRoute')
const Route=require('./routes/UsersRoute')
const commentRouter = require('./routes/CommentRoute')

const PORT = 3000
const app = express()

app.use(cors())
const bcrypt=require('bcrypt')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use("/",Route)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})