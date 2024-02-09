const db = require('../index')
const { DataTypes } = require('sequelize')

const likeSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}

const Like = db.define('likes', likeSchema)

const saveLike = (id) => {
    return Like.create({postId: id})
}

const deletLike = (id) => {
    return Like.destroy({where: {id, id}})
}

const countLikes = (id) => {
    return Like.count({where: {postId: id}})
}

module.exports = {Like, saveLike, deletLike, countLikes}