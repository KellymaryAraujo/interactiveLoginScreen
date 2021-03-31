var btnCreate = document.querySelector("#create");
var btnLogin = document.querySelector("#login");
var btnSignin = document.querySelector("#signin");

var body = document.querySelector("body");

btnCreate.addEventListener("click", function() {
  body.className = "create-in-js";
});

btnLogin.addEventListener("click", function(){
  body.className = "login-in-js"
})

btnSignin.addEventListener("click", function(){
  window.alert(
  `  Hi
  This login is just a demo
  Click on "registration" to access a registration page
  Thanks!`)
})