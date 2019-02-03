firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var user = firebase.auth().currentUser;
        var bandName = document.getElementById("bandName_field").value;
        var bandLocation = document.getElementById("bandLocation_field").value;
        var bandDescription = document.getElementById("band_description").value;
        var bandLookingForInstruments = document.getElementById("band_looking_for_instruments").value;
        var bandGenre = document.getElementById("bandGenres_field").value;
        var bandLevel = documen.getElementById("bandLevel_field").value;
        var bandNextPerformance = documen.getElementById(id="next_performance_field").value;
        var db = firebase.firestore();
        db.collection("bands").doc(band.name).set({
            name: bandName,
            location: bandName,
            description: bandName,
            lookingForInstruments: bandName,
            genre: bandGenre,
            level: bandLevel,
            nextPerformance: bandNextPerformance
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
});