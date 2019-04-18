function login(){
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPass").value;

    document.getElementById("LoginBtn").style.display="none";
    document.getElementById("loading1").style.display="block";

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("loading1").style.display="none";
        document.getElementById("LoginBtn").style.display="block";

        window.alert(errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location="user.html";
        } else {
        }
    });
}