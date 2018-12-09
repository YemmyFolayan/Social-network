const mongoose = require('mongoose');
const Comment = require('./Comment')
const {Schema} = mongoose;


const postSchema = new Schema({
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
  type: {
    type: String,
    default: 'public',
    enum: ['public', 'friends', 'private']
  },
  tags: {
    type: [String],
    set: value => value
      .filter(Boolean)
      .map(tag => tag.toLowerCase())
  },
  votes: {
    type:  [Schema.Types.ObjectId]
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
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
});


postSchema.post('remove', post => {
  return Comment.deleteMany({_id: {$in: post.comments}})
});



const Post = mongoose.model('Post', postSchema);
module.exports = Post;
