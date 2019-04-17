firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location="user.html";
    } else {
        window.location="authentication.html";
    }
});



