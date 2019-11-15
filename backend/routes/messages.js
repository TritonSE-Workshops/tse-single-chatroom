var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var { Message } = require('../models');

router.get('/', function(req, res) {
  // Parse limit field, bad requests are just returned with 400's
  let limit = parseInt(req.query.limit || '30', 10);
  if (limit < 1 || limit > 100) {
    res.status(400).json({ error: true, message: 'Invalid limit.' });
    return;
  }
  let query = Message.find();
  // Client can specify a cutoff date
  if ('after' in req.query) {
    let cutoff_date = new Date(req.query.after);
    query = Message.find({ created_at: { "$gte" : cutoff_date } });
  }
  // Sort messages by date
  query = query.sort('-created_at');
  // Limit number of messages we can get
  query = query.limit(limit);
  query.exec((err, messages) => {
    if (err) {
      res.status(500).json({ error: true, message: err.message });
      return;
    }
    res.json({ success: true, data: messages });
  });
});

router.post('/', function (req, res) {
  // Make sure we have message information 
  let message_sender = req.body.sender;
  let message_content = req.body.content;
  if (message_sender == null || message_content == null) {
    res.status(400).json({ error: true, message: 'Must specify message content and sender.' });
    return;
  }
  // Construct new message given the channel object, sender name, and message content 
  let message = new Message({
    sender: message_sender,
    content: message_content,
    created_at: Date.now() 
  });
  // Save the message into the database
  message.save((err, message) => {
    if (err) {
      res.status(500).json({ error: true, message: err.message });
      return;
    }
    res.json({ success : true, data: message }); 
  });
});

module.exports = router;
