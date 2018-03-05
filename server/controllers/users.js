//Require mongoose
var mongoose = require('mongoose');

//Store models in variables
var User = mongoose.model('User');

module.exports = {
    create: function(req,res){
        User.findOne({name: req.body.name}, function(err, foundUser){
            if(err){
                console.log('validation error');
                res.json(err);
            } else if(foundUser == null){
                //Create user
                console.log('no user found');
                var newUser = new User({name: req.body.name});
                newUser.save(function(err){
                    if(err){
                        console.log('validation errors');
                        res.json(err);
                    } else {
                        console.log('user created');
                        //Add user to session
                        req.session.userId = newUser._id;
                        res.json(newUser);
                    }
                })
            } else {
                console.log("Logged in");
                req.session.userId = foundUser._id;
                res.json(foundUser);
            }
        })
    },

    login: function(req, res){
        if(req.session.userId != undefined){
            User.findOne({_id: req.session.userId}, function(err, foundUser){
                if(err){
                    res.json(err);
                } else {
                    res.json(foundUser);
                }
            })
        }else{
            res.json({errors: "No user found"});
        }
    },

    logout: function(req, res){
        req.session.destroy(function(err){
            if(err){
                res.json({message: err});
            } else {
                res.json({message: "No error found"});
            }
        })
    }

}
