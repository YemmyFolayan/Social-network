const mongoose = require('mongoose');
const {Schema} = mongoose;

const RequestSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  sender: Schema.Types.ObjectId,
  receiver: Schema.Types.ObjectId,
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'accepted', 'declined', 'canceled']
  }
})


RequestSchema.post('remove', function(request) {
  const User = mongoose.model('User')
  Promise.all([
    User.findById(request.sender),
    User.findById(request.receiver)
  ]).then(([sender, receiver]) => {
    sender.requests.pull(request);
    receiver.requests.pull(request);

    Promise.all([
      sender.save(), 
      receiver.save()
    ]).then(() => next())
  })
});

const Request = mongoose.model('Request', RequestSchema);
module.exports = Request;