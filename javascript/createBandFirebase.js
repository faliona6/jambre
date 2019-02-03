var bandName, bandLocation, bandDescription, bandLookingForInstruments, bandGenre, bandLevel, bandNextPerformance;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        user = firebase.auth().currentUser;
    }
});

function postBand() {
    user = firebase.auth().currentUser;
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
        genre: bandGenre,
        location: bandLocation,
        description: bandDescription,
        lookingForInstruments: bandLookingForInstruments,
        genre: bandGenre,
        level: bandLevel,
        nextPerformance: bandNextPerformance
    })
    .then(function() {
        db.collection("users").doc(user.email).get()
            .then(data => {
                userData = data.data();
                if (userData["bandName0"] == undefined) {
                    db.collection("users").doc(user.email).update({
                        name: userData["name"],
                        bio: userData["bio"],
                        genres: userData["genres"],
                        instruments: userData["instruments"],
                        preferences: userData["preferences"],
                        bandName: bandName
                    });
                } else if (userData["bandName1"] == undefined) {
                    db.collection("users").doc(user.email).update({
                        name: userData["name"],
                        bio: userData["bio"],
                        genres: userData["genres"],
                        instruments: userData["instruments"],
                        preferences: userData["preferences"],
                        bandName: userData["bandName"],
                        bandName1: bandName
                    });
                } else if (userData["bandName2"] == undefined) {
                    db.collection("users").doc(user.email).update({
                        name: userData["name"],
                        bio: userData["bio"],
                        genres: userData["genres"],
                        instruments: userData["instruments"],
                        preferences: userData["preferences"],
                        bandName: userData["bandName"],
                        bandName1: userData["bandName1"],
                        bandName2: bandName
                    });
                } else if (userData["bandName3"] == undefined) {
                    db.collection("users").doc(user.email).update({
                        name: userData["name"],
                        bio: userData["bio"],
                        genres: userData["genres"],
                        instruments: userData["instruments"],
                        preferences: userData["preferences"],
                        bandName: userData["bandName"],
                        bandName1: userData["bandName1"],
                        bandName2: userData["bandName2"],
                        bandName3: bandName
                    });
                } else if (userData["bandName4"] == undefined) {
                    db.collection("users").doc(user.email).update({
                        name: userData["name"],
                        bio: userData["bio"],
                        genres: userData["genres"],
                        instruments: userData["instruments"],
                        preferences: userData["preferences"],
                        bandName: userData["bandName"],
                        bandName1: userData["bandName1"],
                        bandName2: userData["bandName2"],
                        bandName3: userData["bandName3"],
                        bandName4: bandName
                    });
                }
                
                
                console.log("Document successfully written!");
                alert('The band has been successfully created.');
                location.replace('/bandpage');
            });
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });   
}