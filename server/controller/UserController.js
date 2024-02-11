const userModel = require('../../database/models/UserModel')
require("dotenv").config()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

const { authenticateToken } =require('../middleware/token')
const { name } = require('@cloudinary/url-gen/actions/namedTransformation')
const secretKey = process.env.JWT_SECRET;
console.log(secretKey,"secretkey")


const getAll = async (req, res) => {
    await userModel.fetchAllUsers()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const getOneUser = async (req, res) => {
    const id = req.params.id
    await userModel.fetchPostByUser(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const addAccount = async (req, res) => {
    const {name, email, password} = req.body
    try {
        const hashed = await bcrypt.hash(password, 10)
        const values = {
          name: name,
          email: email,
          password: hashed
        }

    await userModel.findUser(email, name)
    .then((result)=>{
        if(!!result){
            res.status(409).send('User with the same email or name already exists')
        }
        else{
            userModel.saveUser(values)
            .then((result)=>{
                const token = jwt.sign({name: name}, secretKey)
                res.status(201).json({result, token})
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
        }
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
    }
    catch(err){
        res.status(500).json(err)
    }
}

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    await userModel.findUser(email,'ss')
    .then((results)=>{
        console.log(results);
        if (!!results) {
            const user = results.dataValues
            const hashedPwd = user.password
            try {
              const isMatch = bcrypt.compare(password, hashedPwd)
              if (isMatch) {
                const token = jwt.sign({ email: user.email }, secretKey)
                res.send({ message: 'User exists', token })
              } else {
                console.log("Incorrect email or password")
                res.status(401).send({ error: 'Incorrect email or password' })
              }
            } catch (error) {
              console.error(error);
              res.status(500).send({ error: 'Internal server error' })
            }
          } else {
            console.log("User not found")
            res.status(404).send({ error: 'User not found' })
          }
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
  }

  const destroy = (req, res) => {
    const id = req.params.id
    try{
        const result = userModel.removeUser(id)
        res.status(200).json(result)
    }
    catch(err){
        res.status(500).send(err)
    }
  }


module.exports = {getAll, getOneUser, addAccount, login, destroy}