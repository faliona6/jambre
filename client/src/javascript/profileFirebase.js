firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        getUserData();
    }
});



function hello() {
    console.log("hello");
}

function getUserData() {
    var db = firebase.firestore();
    console.log(db);
    var user = firebase.auth().currentUser;
    console.log("user: " + user.email);
    var docRef = db.collection("users").doc(user.email);
    console.log("ref" + docRef);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            var data = console.log(doc.data());
            console.log("data" + data);
        }
        else {
            console.log("No document");
        }
    })
}