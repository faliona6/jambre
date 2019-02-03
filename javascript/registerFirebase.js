firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    if ($(location).attr("pathname") === '/login' || $(location).attr("pathname") === '/register') {
        setTimeout(() => {
            window.location.replace('/');
        }, 1000);
    }
    var userName = $("#firstname_field").val() + " " + $("#lastname_field").val();
    var userInstruments = $("#instruments_field").val();
    var userGenres = $("#genres_field").val();
    var userPlayingPrefs = $("#playing_pref_field").val();
    var userBio = $("#bio_field").val();
    var db = firebase.firestore();
    db.collection("users").doc(user.email).set({
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
  }
});

  function create(){
    var userEmail = $('#email_field').val();
    var userPass = $('#password_field').val();
    var userPassConf = $('#password_conf_field').val();

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
