const express = require('express');
const router = express.Router();
const passport=require('passport')
const postController = require('../controllers/posts_controller');
router.post('/create',passport.checkAuthentication,postController.create);
router.get('/destroy/:id',passport.checkAuthentication,postController.destroy);
// router.post('/create',postController.create);
module.exports = router;