var bandName, bandLocation, bandDescription, bandLookingForInstruments, bandGenre, bandLevel, bandNextPerformance;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        user = firebase.auth().currentUser;
    }
});

function postBand() {
    var bandName = $( "#bandName_field" ).val();
    var bandLocation = $( "#bandLocation_field" ).val();
    var bandDescription = $( "#band_description" ).val();
    var bandLookingForInstruments = $( "#band_looking_for_instruments" ).val();
    var bandGenre = $( "#bandGenres_field" ).val();
    var bandLevel = $( "#bandLevel_field" ).val();
    var bandNextPerformance = $( "#next_performance_field" ).val();
    var db = firebase.firestore();
    db.collection("bands").doc(bandName).set({
        name: bandName,
        location: bandLocation,
        description: bandDescription,
        lookingForInstruments: bandLookingForInstruments,
        genre: bandGenre,
        level: bandLevel,
        nextPerformance: bandNextPerformance
    })
    .then(function() {
        console.log("Document successfully written!");
        var successfulPost = db.collection('bands').doc(bandName);

        successfulPost.get()
        .then(data => {
            console.log('The band has been successfully created.')
            alert('The band has been successfully created.');
            location.replace('/bandpage');
        })
        .catch(err => {
            console.log('Error: ', err);
        });
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });   
}