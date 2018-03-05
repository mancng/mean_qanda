var User = require('./../controllers/users.js');
var Question = require('./../controllers/questions.js');
var path = require('path')
var bodyParser = require( 'body-parser' );

module.exports = function(app){
    //Login or Create User:
    app.post('/api/users', User.create)
    app.get('/api/users/current', User.login)
    app.get('/api/users/current/logout', User.logout)

    //Questions
    app.get('/api/questions', Question.getAllQuestions)
    app.post('/api/questions', Question.addQuestion)
    app.get('/api/questions/:id', Question.getQuestionById)
    app.put('/api/write/:id', Question.addAnswerById)
    app.put('/api/write/:id/liked', Question.addLike)
    app.delete('/api/questions/:id', Question.deleteQuestion)

    //Route all other routes to home
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve( __dirname + '/mainApp/dist/index.html'));
    }) 

}


