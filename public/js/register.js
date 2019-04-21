function register(){

    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPass").value;
    var name = document.getElementById("regName").value;

    document.getElementById("RegBtn").style.display="none";
    document.getElementById("loading").style.display="block";

    var db = firebase.firestore();

    auth.createUserWithEmailAndPassword(email, password).then(function(cred) {
        return db.collection("users").doc(cred.user.uid).set({
            Name: name
        })
    }).then(function(){
        window.location="user.html";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById("loading").style.display="none";
        document.getElementById("RegBtn").style.display="block";

        window.alert(errorMessage);
    });

}


