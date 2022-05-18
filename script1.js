function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}

let date = new Date();
let DATE = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();



// find a way to fetch details from API for reference see onSuccess above
// let name = 
// let phone = 
// let email = 
// document.querySelector("#name").innerHTML = name ;
// document.querySelector("#phone").innerHTML = phone ;
// document.querySelector("#email").innerHTML = email ;
document.querySelector("#date").innerHTML = DATE +"/"+ month+"/"+year;

// TRY TO ACHIEVE A WAY THAT WHEN SIGN IN IS COMPLETE THEN YOU REDIRECT TO info.html page



