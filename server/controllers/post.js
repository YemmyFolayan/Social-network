const Post = require('../models/Post');
const Comment = require('../models/Comment');


function authorize(req) {
 if(!req.user) {
  throw new Error('You are not authorized!')
 }
}


function create({parent, args, req}) {
  authorize(req);
  return new Post({
    body: args.body,
    tags: args.tags,
    author: req.user.id
  }).save()
}


function remove({parent, args, req}) {
  authorize(req);
  return Post.findById(args.id)
    .then(post => {
      if(!post) {
        throw new Error('Post not found');
      }

      if(post.author != req.user.id) {
        throw new Error('You cannot delete this post');
      }

      else return post.remove()
    })
}


function upvote({args, req}) {
  authorize(req);

  return Post.findOneAndUpdate({
    _id: args.id,
    votes: {$ne: req.user.id}
  }, {
    $inc: {'rating.upvotes': 1},
    $push: {'votes': req.user.id}
  }, {new: true})
}


function downvote({args, req}) {
  authorize(req);
  
  return Post.findOneAndUpdate({
    _id: args.id,
    votes: {$ne: req.user.id}
  }, {
    $inc: {'rating.downvotes': 1},
    $push: {'votes': req.user.id}
  }, {new: true})
}


function addComment({parent, args, req}) {
  authorize(req);
  return Post.findById(args.postId).then(post => {
    if(!post) {
      throw new Error('Post not found');
    }

    else {
      let comment = new Comment({
        body: args.body,
        author: req.user.id,
        post: args.postId
      })

      post.comments.push(comment);
      return Promise.all([post.save(), comment.save()])
        .then(([post]) => post)
    }
  })
}


function removeComment({args, req}) {
  authorize(req);
  return Comment.findById(args.commentId)
    .then(comment => {
      if(!comment) {
        throw new Error('Comment not found');
      }

      if(comment.author != req.user.id) {
        throw new Error('You do not have permission to delete this comment.')
      }

      return Post.findById(comment.post)
        .then(post => {
          post.comments.pull(comment)
          return Promise.all([post.save(), comment.remove()])
            .then(([post]) => post)
        })
    })
}


function upvoteComment({args, req}) {
  authorize(req);
  return Comment.findOneAndUpdate({
    _id: args.id,
    votes: {$ne: req.user.id}
  }, {
    $inc: {'rating.upvotes': 1},
    $push: {'votes': req.user.id}
  }, {new: true})
}


function downvoteComment({args, req}) {
  authorize(req);
  return Comment.findByIdAndUpdate({
    _id: args.id,
    votes: {$ne: req.user.id}
  }, {
    $inc: {'rating.downvotes': 1},
    $push: {'votes': req.user.id}
  }, {new: true})
}


function getAll({req, args}) {
  return Post.find({})
    .skip(args.offset)
    .limit(args.limit)
    .sort({date: -1})
}


function getOne({req, args}) {
  return Post.findById(args.id)
}


function getByTag({req, args}) {
  return Post.find({tags: {"$in": [args.tag]}})
    .skip(args.offset)
    .limit(args.limit)
    .sort({date: -1})
}


function getByAuthor({req, args}) {
  return Post.find({author: args.author})
    .skip(args.offset)
    .limit(args.limit)
    .sort({date: -1})
}

function updatePost({req, args}) {
  return Post.findByIdAndUpdate(args.id, {body: args.body}, {new: true})
}


module.exports = {
  create,
  remove,
  upvote,
  downvote,
  getAll,
  getOne,
  getByTag,
  getByAuthor,
  addComment,
  removeComment,
  upvoteComment,
  downvoteComment,
  updatePost
}