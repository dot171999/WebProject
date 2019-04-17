function register(){
    var email = document.getElementById("input_email").value;
    var password = document.getElementById("input_password").value;

    document.getElementById("main-div").style.display="none";
    document.getElementById("loading").innerText="Loading...";

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        document.getElementById("loading").innerText="";
        document.getElementById("main-div").style.display="block";

        window.alert(errorMessage+" "+errorCode);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            window.location="user.html";
        } else {
        }
    });
}