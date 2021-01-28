var db = require('../db');
var express1 = require('express');
var router = express1.Router();
var controller = require('../controller/auth-user-controller');

router.get('/',function(req,res,next){
    var cookie = req.cookies.userName;
    if(!cookie){
        res.redirect("/auth/login");
        return;
    }
    var checkCookie = db.get('users').find({username: req.cookies.userName}).value();

    if(!checkCookie){
        res.redirect("/auth/login");
    }

    next();
})

module.exports = router;