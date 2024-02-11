const db = require('../index2')
const { DataTypes, Sequelize } = require('sequelize')
const {Comment} = require('../models/CommentModel')
const {Like} = require('../models/LikeModel')
const {Post} = require('./PostModel')

const userSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    name:DataTypes.STRING,

    email: DataTypes.STRING,
    password: DataTypes.STRING
}

const User = db.define('users', userSchema)

User.hasMany(Post)
User.hasMany(Like)
User.hasMany(Comment)
Post.hasMany(Comment)
Post.hasMany(Like)

db.sync({force: true})

const fetchAllUsers = () => {
    return User.findAll({include: [Post, Comment, Like]})
}

const fetchPostByUser = (id) => {
    return User.findByPk(id, {include: Post})
}

const removeUser = (id) => {
    return User.destroy({where: {id: id}})
}

const findUser = (email, name) => {
    return User.findOne({where: Sequelize.or({name: name}, {email: email})})
}

const saveUser = (data) => {
    return User.create(data)
}


module.exports = {User, fetchAllUsers, fetchPostByUser, removeUser, findUser, saveUser}
