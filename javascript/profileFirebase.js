firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        fillProfileOnStart();
    }
});

function fillProfileOnStart() {
    getUserData()
}


//Returns dictionary of user data. Access data["name"]
function getUserData() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var docRef = db.collection("users").doc(user.email);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            var data = doc.data();
            console.log(data);


            $('#profile-email').val() = "email: " + user.email;
            $('#profile-name').val() = data["name"].toUpperCase();
            /*$('#profile-location').val() = data["location"];*/
            $('#profile-description').val() = data["bio"];
            $('#profile-instruments').val() = data["instruments"];
            $('#profile-genres').val() = data["genres"];
            $('#profile-preferences').val() = data["preferences"];

            x = $('#profile-email').val();
            x.appendChild(node);


        }
        else {
            console.log("No document");
        }

        
    })

}
