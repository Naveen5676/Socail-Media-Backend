const sequelize = require('../util/database');
const Sequelize = require('sequelize')
const commentsdata = require('./commentsdata')

const userdata = sequelize.define("socialmediadata", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      imageurl:{
        type: Sequelize.STRING,
        allowNull:false
      },
      description:{
        type: Sequelize.STRING,
        allowNull:false
      }
});

userdata.hasMany(commentsdata);
commentsdata.belongsTo(userdata);



module.exports = userdata;