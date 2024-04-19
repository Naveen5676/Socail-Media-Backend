const userdata = require("../models/userdata");


exports.postAddData = (req, res, next) => {
  const imageurl = req.body.imageurl;
  const description = req.body.description;

  userdata
    .create({
      imageurl: imageurl,
      description: description,
    })
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getData = (req, res, next) => {
  userdata
    .findAll()
    .then((data) => {
        res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
