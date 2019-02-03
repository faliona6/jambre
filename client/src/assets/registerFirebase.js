firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    var userName = document.getElementById("firstname_field").value + document.getElementById("lastname_field").value
    var userInstruments = document.getElementById("instruments_field").value;
    var userGenres = document.getElementById("genres_field").value;
    var userPlayingPrefs = document.getElementById("playing_pref_field").value;
    var userBio = document.getElementById("bio_field").value;
// Add a new document in collection "cities"
var db = firebase.firestore();
    db.collection("test").doc(user.email).set({
    instruments: userInstruments,
    genres: userGenres,
    preferences: userPlayingPrefs,
    bio: userBio,
    name: userName
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

    window.location.href = "http://google.com";
    if(user != null){
      var email_id = user.email;

    }
  }

  else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
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
