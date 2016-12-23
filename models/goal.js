const mongoose =  require('mongoose')

var db =  mongoose.connect('mongodb://localhost/myNewDB');
var mySchema= mongoose.Schema

var goalCollecton = new mySchema({
	"goal_title": String,
	"goal_subtitle":String
})

module.exports = db.model('goal_collectons',goalCollecton)