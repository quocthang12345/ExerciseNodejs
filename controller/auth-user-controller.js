var db = require('../db');
var md5 = require('md5');
module.exports.postLogin = function(req,res,next){
    var userName = db.get('users').find({username: req.body.username}).value();
    var password = db.get('users').find({password: md5(req.body.password)}).value();
    if(!userName){
        res.render('login',{
            errors: ["Username doens't exists !"]
        })
        return;
    }
    if(!password){
        res.render('login',{
            errors: ["Wrong Password !"]
        })
        return;
    }
    res.cookie('userName', userName.username);
    res.redirect('/user');
}