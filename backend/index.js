const express = require ('express')

const cors = require ('cors') 
const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    res.send("hello")
})

app.listen(PORT, ()=>{
console.log("listenin to port"+PORT)
})