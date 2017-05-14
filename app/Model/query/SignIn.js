var firebase = require('../firebase');

export default function signIn (email,password){
		return new Promise( function(response,reject){
			firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
		        response(user);
		      }).catch(function(error) {
		      reject(error);
		    });
    });

}
