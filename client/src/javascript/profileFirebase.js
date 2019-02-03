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


            document.getElementById("profile-email").innerHTML = "email: " + user.email;
            document.getElementById("profile-name").innerHTML = data["name"].toUpperCase();
            /*document.getElementById("profile-location").innerHTML = data["location"];*/
            document.getElementById("profile-description").innerHTML = data["bio"];
            document.getElementById("profile-instruments").innerHTML = data["instruments"];
            document.getElementById("profile-genres").innerHTML = data["genres"];
            document.getElementById("profile-preferences").innerHTML = data["preferences"];

            var node = document.createTextNode("This is new.");
            x = document.getElementById("profile-email");
            x.appendChild(node);


        }
        else {
            console.log("No document");
        }

        
    })

}
