var express1 = require('express');
var router = express1.Router();
var controller = require('../controller/auth-user-controller');

router.get('/login',function(req,res){
    res.render('login');
})

router.post('/login',controller.postLogin);

module.exports = router;