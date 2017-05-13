var firebase = require('./firebase');


export default function signUp (email,password){
		return new Promise( function(response,reject){
			firebase.auth().createUserWithEmailAndPassword(email,password).then(function(user){
		        response(user);
		      }).catch(function(error) {
		      reject(error);
		    });
    });

}
