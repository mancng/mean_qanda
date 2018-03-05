//Require mongoose
var mongoose = require('mongoose');

//Store models in variables
var Question = mongoose.model('Question');

module.exports = {
    getAllQuestions: function(req, res){
        Question.find({}, function(err, question){
            if(err){
                console.log("Error getting all Questions", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({questions: question});
            }
        })
    },

    addQuestion: function(req, res){
        console.log(req.body)
        var question = new Question(req.body);

        question.save(function(err){
            if(err){
                console.log("Error while adding question");
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully added"});
            }
        })
    },

    getQuestionById: function(req, res){
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
    },

    addAnswerById: function(req, res){
        console.log("I'm tring the add the data")
        console.log(req.params.id)
        Question.update({_id: req.params.id}, {$push:req.body}, {runValidators: true}, function(err){
            if(err){
                console.log("Error adding answer" + err);
                res.json({message: "Error", error: err});
            } else {
                console.log("ADDED answer successfully")
                res.json({message: "Successfully added an answer"});
            }
        })
    },

    addLike: function(req, res){
        console.log("ADDING LIKE")
        Question.findOne({_id: req.params.id}, function(err, question){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                for (i = 0; i < question.answers.length; i++){
                    if(question.answers[i]._id == String(req.body.answerId)) {
                        console.log("MATCHED")
                        question.answers[i].likes++;
                        console.log(question.answers[i])
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
    },

    deleteQuestion: function(req, res){
        Question.remove({_id: req.params.id}, function(err, question){
            if(err){
                console.log("Error deleting question from mongo", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully deleted"});
            }
        })
    }




}