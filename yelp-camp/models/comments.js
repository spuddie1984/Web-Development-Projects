const mongoose = require('mongoose');

/////// COMMENTS SCHEMA AND MODEL ///////

const Schema = mongoose.Schema;
// Define the campgroundSchema keys and key types
const commentsSchema = new Schema({
   text: String,
   rating: Number,
   updatedAt: Number,
   author:{
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Users"
      },
      username: String
   }
   
});
// set the database model
module.exports = mongoose.model('Comments', commentsSchema);