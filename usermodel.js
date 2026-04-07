const mongoose= require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

const userSchema= mongoose.Schema({
  name: String ,
  email: String 
})

// on based of model we can create CRUD operations 
module.exports = mongoose.model('user',userSchema);