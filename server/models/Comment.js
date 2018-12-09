const mongoose = require('mongoose');
const {Schema} = mongoose;

const CommentSchema = new Schema({
  body: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  votes: {
    type: [Schema.Types.ObjectId]
  },
  rating: {
    upvotes: {
      type: Number,
      default: 0
    },
    downvotes: {
      type: Number,
      default: 0
    }
  }
})

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;