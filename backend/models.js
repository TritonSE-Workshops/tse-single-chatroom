const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: String,
  content: String,
  created_at: Date 
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = {
  Message
}
