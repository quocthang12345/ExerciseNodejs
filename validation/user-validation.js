module.exports.postCreate = function(req,res,next){
    var error = [];
    if(!req.body.name){
        error.push("Please Enter Username");
    }

    if(!req.body.phone){
        error.push("Please Enter Phone");
    }
    if(error.length){
        res.render('create',{
            errors:error
        });
        return;
    }
    next();
}