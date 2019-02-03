// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtJrNKruPz74uXLW6PnGsWOv9bVQsS9ng",
    authDomain: "bandbase-26533.firebaseapp.com",
    databaseURL: "https://bandbase-26533.firebaseio.com",
    projectId: "bandbase-26533",
    storageBucket: "bandbase-26533.appspot.com",
    messagingSenderId: "962953801879"
  };
  firebase.initializeApp(config);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
    }
  });

  function create(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    var userPassConf = document.getElementById("password_conf_field").value;

      if (userPassConf == userPass) {
          firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("Error : " + errorMessage);
          // Do other stuff??
          });
      }
      else {
          window.alert("Error : Passwords do not match");
      }
  }

  function logout(){
    firebase.auth().signOut();
}