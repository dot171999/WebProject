function logOut(){
    firebase.auth().signOut().then(function() {
        window.location="authentication.html";
    }).catch(function(error) {
        window.alert(error);
    });

}
