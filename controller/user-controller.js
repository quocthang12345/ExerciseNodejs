var User = require('../model/user-model')

module.exports.index = async function(req,res){

    var users = await User.find();
    // User.find().then(function(users){
    //     res.render('user',{
    //         user:users,
    //         keySearch:' '
    //     });
    // }) tra ve 1 promise
    res.render('user',{
        user:users,
        keySearch:' '
    });
}

module.exports.create = function(req,res){
    res.render('create');
}

module.exports.profile = function(req,res){
    var ids = parseInt(req.params.ids);
    var user = db.get('users').find({id:ids}).value();

    res.render('profile',{
        users:user
    })
}

module.exports.postCreate = function(req,res){
    req.body.avatar = req.file.path.split('/').slice(1).join('/');
    db.get('users').push(req.body).write();
    res.redirect('/user');
}

module.exports.search = function(req,res){
    var key = req.query.name;
    var userSearch = users.filter(function(user){
        return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    })

    res.render('user',{
        users:userSearch,
        keySearch:key
    })
}