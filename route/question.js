let express = require('express');
let router = express.Router();
let mysql = require('../util').mysql;
let quizTable = 'question';
router.get('/get',function(req,res){
    let key = req.query.key;
    mysql(quizTable)
        .select('*')
        .where('tag','=',key)
        .then(function(ret){
            res.json(ret);
        })
        .catch(function(err){
            console.log(err);
        });
})
router.post('/save',function(req,res,next){
    let library = [];
    let status = "false";
    let data ={};
    library = req.body.data;

    mysql(quizTable)
        .del()
        .then(()=>{
            library.forEach(element => {
                data = {
                    question:element.question,
                    answers:JSON.stringify(element.answer),
                    correct:element.correct,
                    tag:element.tag
                }
                console.log(data);
                mysql(quizTable)
                    .insert(data)
                    .catch(e => {
                        console.log(e);
                        status = "false";
                        res.json({status:status});
                    });
            });
        })
        .catch(function(err){
            console.log(err);
        });
    
    
    res.json({status:"ojbk"});
    
})
module.exports = router;