const User = require('../models/User');
const Request = require('../models/Request');
const mongoose = require('mongoose');
const {Types: {ObjectId}} = mongoose;

const _ = require('lodash');


function authorize(req) {
 if(!req.user) {
  throw new Error('You are not authorized!')
 }
}

function checkId(req, id) {
  if(req.user.id != id) {
    throw new Error('You dont have permission for this action!')
  }
}


function requestExist(sender, receiver) {
  return receiver.requests.some((req) => {
    return req.sender == sender.id || req.receiver == sender.id;
  })
}


function alreadyFriends(sender, receiver) {
  return sender.friends.some(friend => {
    return receiver.id == friend
  })
}


function getFriends({parent, req}) {
  authorize(req);
  return User.find({_id: {$in: parent.friends}})
}


function getProfile({parent, args, req}) {
  return User.findById(args.id);
}


function updateContactInfo({parent, args, req}) {
  authorize(req);
  checkId(req, args.id);
  const update = _.pick(args.update, ['firstName', 'lastName', 'email']);
  return User.findByIdAndUpdate(args.id, update, {new: true})
}


function updateProfileInfo({parent, args, req}) {
  authorize(req);
  checkId(req, args.id);
  const update = _.pick(args.update, ['gender', 'age', 'phone', 'about']);
  return User.findByIdAndUpdate(args.id, update, {new: true})
}


function updateAddressInfo({parent, args, req}) {
  authorize(req);
  checkId(req, args.id);
  const fields = _.pick(args.update, ['city', 'street', 'country'])
  const update = _.mapKeys(fields, (_, key) => `address.${key}`)
  return User.findByIdAndUpdate(args.id, {$set: update}, {new: true})
}


function sendFriendRequest({parent, args, req}) {
  authorize(req);

  if(args.id == req.user.id) {
    throw new Error('Cannot send request to yourself.');
  }

  const request = new Request({
    sender: req.user.id,
    receiver: args.id,
  });

  return Promise.all([
    User.findById(request.sender).populate('requests'),
    User.findById(request.receiver).populate('requests')
  ]).then(([sender, receiver]) => {
    if(!sender || !receiver) {
      throw new Error('Something went wrong');
    }

    if(requestExist(sender, receiver)) {
      throw new Error('Request exist.');
    }

    if(alreadyFriends(sender, receiver)) {
      throw new Error('You are already friend with this person.')
    }


    return request.save().then(res => {
      sender.requests.push(res);
      receiver.requests.push(res);

      return Promise.all([
        sender.save(), 
        receiver.save()
      ]).then(() => res)
    })
  })
}

function respondToFriendRequest({parent, args, req}) {
  authorize(req);

  return Request.findById(args.requestId).then(request => {
    if(!request) throw new Error('Something went wrong');
    if(request.receiver != req.user.id) throw new Error('Something went wrong');

    if(args.response == 'accepted') {
      return Promise.all([
        User.findById(request.sender),
        User.findById(request.receiver)
      ]).then(([sender, receiver]) => {
        sender.friends.push(receiver);
        receiver.friends.push(sender);

        return Promise.all([
          sender.save(), 
          receiver.save()
        ]).then(() => request.remove())
      })
    } else if(args.response == 'declined') {
      return request.remove()
    }
  })
}

function cancelFriendRequest({parent, args, req}) {
  authorize(req);
  return Request
    .findById(args.id)
    .then(request => {
      if(req.user.id != request.sender) {
        throw new Error('Something went wrong')
      }

      return request.remove();
    })
}


function unfriend({parent, args, req}) {
  authorize(req);
  const userId = req.user.id;
  const friendId = args.id;

  return Promise.all([
    User.findById(userId),
    User.findById(friendId)
  ]).then(([user, friend]) => {
    user.friends.pull(friend);
    friend.friends.pull(user);

    return Promise.all([
      user.save(),
      friend.save()
    ]).then(([user]) => user)
  })
}


function peopleYouMayKnow({parent, args, req}) {
  authorize(req);
  return User.aggregate([
    {'$match': {'$and': [
      {'_id': {'$nin': req.user.friends}},
      {'_id': {'$ne': ObjectId(req.user.id)}}
    ]}},
    {'$sample': {size: 5}}
  ]).then(res => res.map(person => {
    let id = ObjectId(person._id).toString()
    return { ...person, id }
  }))
}


module.exports = {
  getFriends,
  getProfile,
  unfriend,
  updateContactInfo,
  updateProfileInfo,
  updateAddressInfo,
  sendFriendRequest,
  respondToFriendRequest,
  cancelFriendRequest,
  peopleYouMayKnow
}

