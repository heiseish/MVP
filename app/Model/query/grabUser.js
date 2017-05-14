const firebase =require('./firebase');

const userRef = firebase.database().ref('users');

export default function grabUser(userId,user,cb){
	userRef.once('value').then((snap) =>{

		if (snap.hasChild(userId)) {
			firebase.database().ref('users/' + userId).once('value').then((snap) => {
			let userModified = snap.val();
			userModified.picture = user.picture;
			 cb(null,userModified)
			})
		}
		else {
			user.leader = false;
			firebase.database().ref('users/' + userId).set(user);
			cb(null,user)
		}

	})

}
