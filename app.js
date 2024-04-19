const cors = require("cors");
const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");

const userrouter = require("./routes/user");

const usermodel = require('./models/userdata');
const commentmodel = require('./models/commentsdata');

const app = express();

app.use(cors());
app.use(bodyparser.json({extended:false}));
app.use(userrouter);

// commentmodel.belongsTo(usermodel , { constraints:true , onDelete:"CASCADE"})
// usermodel.hasMany(commentmodel)


sequelize
  .sync({force: false})
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
