firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        if ($(location).attr("pathname") === '/login' || $(location).attr("pathname") === '/register') {
            window.location.replace('/findbands')
        }
    }
});

function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // Do other stuff??
    });
}

function logout() {
    firebase.auth().signOut();
}
