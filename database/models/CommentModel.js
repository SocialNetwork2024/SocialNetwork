const db = require('../index')
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





module.exports = {Comment}
