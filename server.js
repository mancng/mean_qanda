//Require Express
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var session = require( 'express-session' );

//Get body-parser
var bodyParser = require( 'body-parser' );

//Other server configs
app.use(bodyParser.json());
app.use(express.static( __dirname + '/mainApp/dist'));
app.use(session({secret: "SecretOfTheSecret"}));

//Mongoose/MongoDB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_qanda_api');

//Define Schema variable
var Schema = mongoose.Schema;

//Define User Schema
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, minlength: 3 }
});

//Define Question Schema
var QuestionSchema = new mongoose.Schema({
    questionContent: { type: String, required: true, minlength: 10 },
    questionDesc: { type: String },
    answers: [
        {
            answerContent: { type: String, required: true, minlength: 5 },
            answerDesc: { type: String },
            likes: { type: Number, default: 0 },
            writer: { type: String }
        }
    ],
});

//Set models by passing them their respective Schemas
mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);

//Store models in variables
var User = mongoose.model('User');
var Question = mongoose.model('Question');
mongoose.Promise = global.Promise;

//ROUTES

//Login or Create User:
app.post('/api/users', function(req, res){
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
})

//Get current User
app.get('/api/users/current', function(req, res){
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
})

//Remove current user from session
app.get('/api/users/current/logout', function(req, res){
    req.session.destroy(function(err){
        if(err){
            res.json(err);
        } else {
            res.json({message: "No error found"});
        }
    })
})

//Get all Questions
app.get('/api/questions', function(req, res){
    Question.find({}, function(err, question){
        if(err){
            console.log("Error getting all Questions", err);
            res.json({message: "Error", error: err});
        } else {
            res.json(question);
        }
    })
})

//Add question
app.post('/api/questions', function(req, res){
    console.log(req.body)
    var question = new Question(req.body);

    question.save(function(err){
        if(err){
            console.log("Error while adding author");
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully added"});
        }
    })
})

//Get Single Quesiton by ID
app.get('/api/questions/:id', function(req, res){
    Question.findOne({_id: req.params.id}).sort('answers.likes').exec(
        function(err, question){
            if(err){
                console.log("Error gett one Question", err);
                res.json({message: "Error", error: err});
            } else {
                res.json(question);
            }
        }
    )
})

//Add an answer by question ID
app.put('/api/write/:id', function(req, res){
    console.log("I'm tring the add the data")
    Question.update({_id: req.params.id}, {$push:req.body}, {runValidators: true}, function(err){
        if(err){
            console.log("Error adding answer" + err);
            res.json({message: "Error", error: err});
        } else {
            res.json({message: "Successfully added an answer"});
        }
    })
})

//Add like
app.put('/api/write/:id/liked', function(req, res){
    Question.findOne({_id: req.params.id}, function(err, question){
        if(err){
            res.json({message: "Error", error: err});
        } else {
            for (i = 0; i < question.answers.length; i++){
                if(question.answers[i]._id == String(req.body.answerId)) {
                    console.log("MATCHED")
                    question.answers[i].likes++;
                    question.save(function(err){
                        if(err){
                            res.json({message: "Error", error: err});
                        } else {
                            res.json({message: "Successfully upvoted"})
                        }
                    })
                }
            }
        }
    })
})

//Delete question
app.delete('/api/questions/:id', function(req, res){
    Question.remove({_id: req.params.id}, function(err, question){
        if(err){
            console.log("Error deleting question from mongo", err);
            res.json({message: "Error", error: err});
        } else {
            res.json({messag: "Successfully deleted"});
        }
    })
})


//Route all other routes to home
app.all('*', (req, res, next) => {
    res.sendFile(path.resolve( __dirname + '/mainApp/dist/index.html'));
}) 

//Listen to server
app.listen(8000, function(){
    console.log("Listening to 8000")
})