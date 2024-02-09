const db = require('../index2')
const { DataTypes } = require('sequelize')

const likeSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
}

const Like = db.define('likes', likeSchema)





module.exports = {Like}