var regBtn = document.getElementById("overlayRegBtn");
var logBtn = document.getElementById("overlayLoginBtn");
var container = document.getElementById("main-container");

regBtn.addEventListener('click',() =>
    container.classList.remove('reg-active'));

logBtn.addEventListener('click',() =>
    container.classList.add('reg-active'));