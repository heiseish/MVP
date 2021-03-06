'use strict';

import Realm from 'realm';


const UserSchema = {

  name: 'User',
        primaryKey: 'username',
        properties: {
            id:    'int',   
            username: 'string', // primary key
            password: 'string',
            fullname: 'string',
            displayname: 'string',
            briefdesc: {type: 'string', optional:true},
            position: {type: 'string', optional: true},
            imageStyle: {type: 'int', default: 1},
            team: {type: 'string', optional: true},
            teamnumber: {type: 'int', optional: true},
            leader: {type: 'bool', default: false},
            email: 'string',
            
        }
};

const ReviewSchema = {
  name: 'Review',
  properties: {
    team: 'string',
    point: 'double',
    comment: {type: 'string', optional: true},
    reviewer: 'string',
  }
};
const PostSchema = {
  name: 'Post',
  properties: {
    post: 'string',
    poster: 'string',
    date: 'string',
  }
};


const UserSmsSchema={
  name: 'user',
  properties: {
    _id: 'int',
    name: 'string',
    avatar: 'string',
  }
}
const MessagesSchema = {
  name: 'Messages',
  properties: {
    _id: 'int',
    text: 'string',
    createdAt: {type: 'date', default: new Date()},
    user: {type:'user'},
  }
};

const TeamSchema = {
  name: 'Team',
  primaryKey: 'id',
  properties: {
    id:    'int',    // primary key
    teamname: 'string',
    imageStyle: {type: 'int', default:1},
    rankpoint: {type: 'int', default: 0},
    teamdescription: {type: 'string', optional: true},
    // review: {type: 'list', objectType: 'Review'},
    winrate: {type: 'int', default: 0},
    matches: {type: 'int', default: 0},
    post: {type: 'list', objectType: 'Post'},
    captain: {type: 'string', optional: true},
    messages: {type:'list', objectType: 'Messages'}
  }
};

const MatchSchema = {
  name: 'Match',
  primaryKey: 'id',
  properties: { 
    id: 'int',
    hometeam: 'string',
    awayteam: 'string',
    state: {type: 'string', default: 'Coming'},
    time: {type: 'string', optional: true},
    hometeamscore: {type: 'int', optional: true},
    awayteamscore: {type: 'int', optional: true},
    ytvideo: {type: 'string', optional: true},
    
  }
};

const RequestSchema = {
  name: 'Request',
  primaryKey: 'id',
  properties: { 
    id: 'int',
    hometeam: 'string',
    awayteam: {type: 'string', optional: true},
    time: {type: 'string', optional: true},
    venue: {type: 'string', optional: true},
    additionalCondition: {type: 'string', optional: true},
    
  }
};




let realm = new Realm({schema: [UserSchema,TeamSchema, ReviewSchema,MatchSchema,PostSchema,RequestSchema,MessagesSchema,UserSmsSchema],schemaVersion: 14});

// realm.write(() => {
//   let TeamMsm = realm.objects('Team').filtered('teamname == "Facebook FC"')[0].messages;
  
//   TeamMsm.push({
//   _id: 1,
//     text: 'Are you building a chat app?',
//     createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
//     user: {
//       _id: 1,
//       name: 'React Native',
//     },
//   })

  
 


  
  
  
// });


module.exports = realm;




