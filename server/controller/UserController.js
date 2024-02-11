const userModel = require('../../database/models/UserModel')
require("dotenv").config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { authenticateToken } =require('../middleware/token')
const secretKey = process.env.JWT_SECRET; // not working
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
        console.log(result)
        if(!!result){
            res.status(409).send('User with the same email or name already exists')
        }
        else{
            userModel.saveUser(values)
            .then((result)=>{
                const token = jwt.sign({name: name}, '0000')
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
    await userModel.findUser(email, password)
    .then((results)=>{
        if (!!results) {
            const user = results.dataValues
            const hashedPwd = user.password
            try {
              bcrypt.compare(password, hashedPwd)
              .then((result)=>{
                console.log(result)
                if(!!result){
                    const token = jwt.sign({ email: user.email }, '0000')
                    console.log(token);
                    res.status(200).json({ message: 'User exists', token })
                }
                else {
                    console.log("Incorrect email or password")
                    res.status(401).send({ error: 'Incorrect email or password' })
                }
              })
              .catch((err)=>{
                res.status(500).send(err)
              })
            }
            catch (error) {
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