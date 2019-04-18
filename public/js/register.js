function register(){
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPass").value;

    document.getElementById("RegBtn").style.display="none";
    document.getElementById("loading").style.display="block";

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("loading").style.display="none";
        document.getElementById("RegBtn").style.display="block";

        window.alert(errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location="user.html";
        } else {
        }
    });
}