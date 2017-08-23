

var User = {};
var name;
var email;
var picture;
var userID;

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    User = {
        ID: profile.getId(),
        Name: profile.getName(),
        Image: profile.getImageUrl(),
        Email: profile.getEmail()
    }
    return User;
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

var loadUser = function (User) {
    LoginPage.name = User.Name;
    LoginPage.email = User.Email;
    picture = User.picture;
    userID = User.userID;
    return name, email, picture, userID;
}