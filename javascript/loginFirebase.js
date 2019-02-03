firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        if ($(location).attr("pathname") === '/login.html' || $(location).attr("pathname") === '/register.html') {
            setTimeout(() => {
                window.location.replace('/index.html');
            }, 1000);
        }
    }
});

function login() {
    var userEmail = $('#email_field').val();
    var userPass = $('#password_field').val();

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
