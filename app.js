console.log('May the Node be with you ')

console.log(__dirname)
const express = require('express');
const mongoose =  require('mongoose')
const bodyParser = require('body-parser')
const app = express();
// var goal = require("/post");

app.use(bodyParser.urlencoded({extended : true}));


var md=mongoose.createConnection('mongodb://localhost:27017/test', (err, database) =>{
  if (err) return console.log(error)
    
})

var models = require('./models');
var GoalModel = models.blog


app.get('/',(req,res) => {
  // usergoals(function(err,goals){
  //  if (err) return;
  //  console.log(goals)
  // });
  res.sendFile( __dirname + '/index.html')
});


app.get('/getList',function(req,res){
  GoalModel.find({},{"_id":0,"__v":0},function(err,goals) {
    console.log(goals);
    res.send(goals)

  })
})

app.get('/auth/facebook', passport.authenticate('facebook'),function(req, res) {
  console.log(res);
});


app.post('/createGoal', (req,res) => {

  console.log(req.body)
    new GoalModel(req.body).save(function(err,result){
      console.log(result)
    })
  console.log('saved to database successfully.')
  res.redirect('/')
});


app.listen(3001, function() {
  console.log('listening on 3001')
});




