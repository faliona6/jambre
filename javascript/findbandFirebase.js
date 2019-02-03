firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log("what");
        fillPage()
    }
});

function fillPage() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var bands = db.collection("bands");

    db.collection("bands")
    .get()
    .then(function(querySnapshot) {
        i = 0;
        console.log("WT");
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var parent = document.getElementById("current-jams");
            var temp = document.getElementsByTagName("template")[0];
            data = doc.data();

            item = temp.content.querySelector("div");
            a = document.importNode(item, true);
            a.id = "band-" + i;
            parent.appendChild(a);


            var x = document.getElementById("band-" + i);
            console.log( data);

            x.getElementsByClassName('band-description')[0].innerHTML = data["description"];
            x.getElementsByClassName('band-description')[0].onClick = 'sendToBandpage(' + data["name"] + ')';
            x.getElementsByClassName('band-name')[0].innerHTML = data["name"].toUpperCase();
            x.getElementsByClassName('band-location')[0].innerHTML = "Located in " + data["location"];
            x.getElementsByClassName('band-needed-instr')[0].innerHTML = "Looking for: " + data["lookingForInstruments"];

            i++;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}

function sendToBandpage(bandName) {
    console.log(bandName);
}