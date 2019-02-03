
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        getUserData();
        applyBandData();
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

            document.getElementById('profile-email').innerHTML = "email: " + user.email;
            document.getElementById('profile-name').innerHTML = data["name"].toUpperCase();
            /*document.getElementById('profile-location')$('#profile-location').innerHTML = data["location"];*/
            document.getElementById('profile-description').innerHTML = data["bio"];
            document.getElementById('profile-instruments').innerHTML = data["instruments"];
            document.getElementById('profile-genres').innerHTML = data["genres"];
            document.getElementById('profile-preferences').innerHTML = data["preferences"];


        }
        else {
            console.log("No document");
        }


    })

}


//Returns dictionary of user data. Access data["name"]
function applyBandData() {
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var docRef = db.collection("users").doc(user.email);


    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            data = doc.data();

            for (i = 0; i < 5; i++) {
                bandName = data["bandName" + i];

                if (bandName != null) {
                    console.log(data["bandName"]);
                    var docRefBand = db.collection("bands").doc(bandName);
                    console.log(data[""]);
                    
                    docRefBand.get().then(function(docBand) {
                        if (docBand.exists) {
                            dataBand = docBand.data();
                            console.log(dataBand);
                            var parent = document.getElementById("bands");
                            var temp = document.getElementsByTagName("template")[0];

                            item = temp.content.querySelector("div");
                            a = document.importNode(item, true);
                            a.id = "band-" + i;
                            parent.appendChild(a);

                            var x = document.getElementById("band-" + i);

                            x.getElementsByClassName('band-description')[0].innerHTML = dataBand["description"];
                            x.getElementsByClassName('band-description')[0].onClick = 'sendToBandpage(' + dataBand["name"] + ')';
                            x.getElementsByClassName('band-name')[0].innerHTML = dataBand["name"].toUpperCase();
                            x.getElementsByClassName('band-location')[0].innerHTML = "Located in " + dataBand["location"];
                            x.getElementsByClassName('band-needed-instr')[0].innerHTML = "Looking for: " + dataBand["lookingForInstruments"];
                        }
                        else {
                            // doc.data() will be undefined in this case
                            console.log("No such document!");
                        }
                    }).catch(function(error) {
                        console.log("Error getting document:", error);
                    });
                    
                }
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    // var bandNames=["hello"];

    // docRef.get().then(doc => {
    //     if (doc) {
    //         var data = doc.data();
    //         console.log(typeof(data));
    //     }
    //     else {
    //         console.log(typeof(data));
    //     }
    // })
}
