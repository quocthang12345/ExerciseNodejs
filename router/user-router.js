var express1 = require('express');
var router = express1.Router();
var validate = require('../validation/user-validation');
var controller = require('../controller/user-controller');
var multer = require('multer');
var upload = multer({dest: './public/upload/'});



router.get('/',controller.index)

router.get('/create',controller.create)

router.get('/profile/:ids',controller.profile)

router.post('/create',upload.single('avatar'),validate.postCreate,controller.postCreate)

router.get('/search',controller.search)

module.exports = router;