'use-strict'
checkIfInUse = (email)  => {
  return false;
}
module.exports = {
  checkEmail: function(email) {

    if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) // check if the email is valid
    return 'This email is invalid!';
    else if (checkIfInUse(email))
    return 'This email is already in used!';
    else
    return null;
  },

  
  checkPassword(password) {

    var numEx = /\d/;
    var lcEx = /[a-z]/;
    var ucEx = /[A-Z]/;
    var symbols = ['/', '@', '#', '%', '&', '.', '!', '*', '+', '?', '|','(', ')', '[', ']', '{', '}', '\\'];
    var meterMult = 1;

    for (var k = 0; k < password.length; k++) {
      var pchar = password.charAt(k);
      if(numEx.test(pchar)){
        meterMult += 0.75;
      }

      if(ucEx.test(pchar)){
        meterMult += 1;
      }

      if(lcEx.test(pchar)){
        meterMult += 0.25;
      }
    }

    for (var i = 0; i < symbols.length; i++) {
      if(password.indexOf(symbols[i]) >= 0) {
        meterMult += 1;
      }
    }

    if(meterMult >= 12) {
      return null;
    }
    else if(password.length >= 6) {
      return null;
    }
    else {
      return 'Password too weak!'
    }
  }
}
