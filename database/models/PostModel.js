const db = require('../index')
const { DataTypes } = require('sequelize')
const {Comment} = require('./CommentModel')
const {Like} = require('./LikeModel')

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

const fetchAllPost = () => {
    return Post.findAll({include: [Like, Comment]})
}

const fetchLikesComments = (id) => {
    return Post.findByPk(id, {include: [Like, Comment]})
}

const createPost = (data, file, userId) => {
    return Post.create({body: data, file: file, userId: userId})
}

const updatePost = (id, data) => {
    return Post.update(data, {where:{id: id}})
}

const deletPost = (id) => {
    return Post.destroy({where: {id: id}})
}

module.exports = {Post, fetchAllPost, fetchLikesComments, createPost, updatePost, deletPost}