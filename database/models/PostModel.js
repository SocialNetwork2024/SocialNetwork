const db = require('../index2')
const { DataTypes } = require('sequelize')
const {Comment} = require('../models/CommentModel')
const {Like} = require('../models/LikeModel')

const postSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: DataTypes.STRING,
    file: DataTypes.STRING
}

const Post = db.define('posts', postSchema)

Post.hasMany(Comment)
Post.hasMany(Like)

db.sync()

const fetchAllPost = () => {
    return Post.findAll({include: [Like, Comment]})
}

const fetchLikesComments = (id) => {
    return Post.findByPk(id, {include: [Like, Comment]})
}

const createPost = (data, file) => {
    return Post.create({body: data, file: file})
}

const updatePost = (id, data) => {
    return Post.update(data, {where:{id: id}})
}

const deletPost = (id) => {
    return Post.destroy({where: {id: id}})
}

module.exports = {Post, fetchAllPost, fetchLikesComments, createPost, updatePost, deletPost}