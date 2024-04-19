const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const  commentsdata = sequelize.define('socialmediacomments' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = commentsdata