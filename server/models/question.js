var mongoose = require('mongoose');
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
mongoose.model('Question', QuestionSchema);