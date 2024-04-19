const express= require('express');
const userController = require('../controllers/user')
const commentController = require( '../controllers/comments' )


const router = express.Router()

router.post('/postdata', userController.postAddData);
router.get('/getData', userController.getData);


router.post('/addcomment' , commentController.addcomment);
router.get('/getcomments', commentController.showComments);


module.exports = router