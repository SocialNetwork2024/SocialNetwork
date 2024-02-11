const db = require('../index2')
const { DataTypes } = require('sequelize')

const commentSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: DataTypes.STRING
}

const Comment = db.define('comments', commentSchema)

const createComment = (postId, userId, data) => {
    return Comment.create({content: data, postId: postId, userId: userId})
}

const updateComment = (id, data) => {
    return Comment.update(data, {where: {id: id}})
}

const deleteComment = (id) => {
    return Comment.destroy({where: {id: id}})
}

// const getComment=()=>{
//     return Comment.findAll()
// }

module.exports = {Comment, createComment, updateComment, deleteComment
    // ,getComment
}
