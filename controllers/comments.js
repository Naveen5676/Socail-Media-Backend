const commentsdata = require("../models/commentsdata");
const usermodel = require("../models/userdata");

exports.addcomment = (req, res, next) => {
  const comment = req.body.comment;
  const id = req.body.id;

  usermodel
    .findByPk(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "user not found" });
      }
      return commentsdata.create({
        comment: comment,
        socialmediadatumId: id,
      });
    })
    .then((comment) => {
      res.status(201).json(comment);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.showComments = (req, res, next) => {
  commentsdata
    .findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
