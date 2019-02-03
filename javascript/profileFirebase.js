
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("hello");
        getUserData()
    }
});

//Returns dictionary of user data. Access data["name"]
function applyBandData() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;

    var bandNames=["hello"];

    docRef.get().then(doc => {
        if (doc) {
            var data = doc.data();
            console.log(typeof(data));
        }
        else {
            console.log(typeof(data));
        }
    })
}
