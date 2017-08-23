BASE.require([
    "jQuery",
    "components.material.segues.AppearInstantSegue",
    "gapi",

], function () {

    BASE.namespace("app.components.layouts");

    var appearInstantSegue = new components.material.segues.AppearInstantSegue();

    user = {};

    app.components.layouts.LoginPage = function (elem, tags, scope) {
        var self = this;
        var $elem = $(elem);
        var outerStateManagerController = $(tags["outer-state-manager"]).controller();
        var $logout = $(tags["logout"]);
        var $name = $(tags["name"]);
        var $email = $(tags["email"]);
        var $userImage = $(tags["userImage"]);
        var $signIn = $(tags["signIn"]);
        var $loadData = $(tags["loadData"]);

        onSignIn = function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());

            user = {
                ID: profile.getId(),
                Name: profile.getName(),
                Image: profile.getImageUrl(),
                Email: profile.getEmail()
            }
            return user;
        };

        signOut = function () {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
                console.log('User signed out.');

                user = {};
            });
        };

        var userLoad = function () {
            $name.text("" + user.Name);
            $email.text("" + user.Email);
            $userImage.text("<img src='" + user.Image + "'>");
        }


        $loadData.on("click", function () {
            gapi.auth2.init(params);
        })

        $logout.on('click', function () {
            signOut();
        });


        var loadState = function () {         
            outerStateManagerController.pushAsync("app-main", { segue: appearInstantSegue }).try();
        };

        var loaderror = function () {
            outerStateManagerController.pushAsync("error-state", { segue: appearInstantSegue }).try();
        };

    }
});