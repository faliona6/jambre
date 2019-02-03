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
            var parent_cur_jams = document.getElementById("current-jams");
            var temp = document.getElementsByTagName("template")[0];
            data = doc.data();

            item = temp.content.querySelector("div");
            a = document.importNode(item, true);
            a.id = "band-" + i;
            parent_cur_jams.appendChild(a);

            var x = document.getElementById("band-" + i);

            var divv = document.createElement('div');
            divv.classList.add("space");
            c = document.importNode(divv, true);
            x.appendChild(c);
            console.log( data);

            x.getElementsByClassName('band-description')[0].innerHTML = data["description"];
            x.getElementsByClassName('band-img flow-left').onclick = function () { sendToBandpage(this.id); };
            x.getElementsByClassName('band-name')[0].innerHTML = data["name"].toUpperCase();
            x.getElementsByClassName('band-location')[0].innerHTML = "Located in " + data["location"];
            x.getElementsByClassName('band-needed-instr')[0].innerHTML = "Looking for: " + data["lookingForInstruments"];


            var parent_sug_bands = document.getElementById("suggested-bands");
            var temp1 = document.getElementsByTagName("template")[0];

            item1 = temp1.content.querySelector("div");
            b = document.importNode(item1, true);
            b.id = "band-sug" + i;
            parent_sug_bands.appendChild(b);


            var y = document.getElementById("band-sug" + i);
            console.log( data);

            y.getElementsByClassName('band-description')[0].innerHTML = data["description"];
            y.getElementsByClassName('band-description')[0].onClick = 'sendToBandpage(' + data["name"] + ')';
            y.getElementsByClassName('band-name')[0].innerHTML = data["name"].toUpperCase();
            y.getElementsByClassName('band-location')[0].innerHTML = "Located in " + data["location"];
            y.getElementsByClassName('band-needed-instr')[0].innerHTML = "Looking for: " + data["lookingForInstruments"];

            i++;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

}

function sendToBandpage(id) {
    window.location.replace('/bandpage?name=' + id)
}
