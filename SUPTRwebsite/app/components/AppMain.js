BASE.require([
    "jQuery",
    "components.material.segues.AppearInstantSegue",

], function () {

    BASE.namespace('app.components');


    var appearInstantSegue = new components.material.segues.AppearInstantSegue();

    app.components.AppMain = function (elem, tags, scope) {
        var self = this;
        var $elem = $(elem);
        var $login = $(tags["login"]);
        var $logout = $(tags["logout"]);
        var stateManagerController = $(tags["state-manager"]).controller();
        var twoColumnLeftOverlayController = $(tags["two-column-left-overlay"]).controller();
        var $inventoryButton = $(tags["inventoryButton"]);
        var $newHireButton = $(tags["newHireButton"]);
        var $resourcesButton = $(tags["resourcesButton"]);
        var $scheduleButton = $(tags["scheduleButton"]);
        var $name = $(tags["userName"]);
        var $image = $(tags["userImage"]);
        var $email = $(tags["userEmail"]);


        var loadLogin = function() {
            init();
        }


        var init = function () {
            stateManagerController.pushAsync("home-state", { segue: appearInstantSegue }).try();
        };

        $elem.on("hamburger-menu-click", function (event) {
            twoColumnLeftOverlayController.showLeftColumn();
        });
        $elem.on("back-clicked", function (event) {
            stateManagerController.popAsync({ segue: appearInstantSegue }).try();
        });
        $elem.on("scheduleButton-click", function (event) {
            twoColumnLeftOverlayController.hideLeftColumn();
            stateManagerController.pushAsync("schedule-state", { segue: appearInstantSegue }).try();
        });
        $elem.on("inventoryButton-click", function (event) {
            twoColumnLeftOverlayController.hideLeftColumn();
            stateManagerController.pushAsync("inventory-state", { segue: appearInstantSegue }).try();
        });
        $elem.on("newHireButton-click", function (event) {
            twoColumnLeftOverlayController.hideLeftColumn();
            stateManagerController.pushAsync("newHire-state", { segue: appearInstantSegue }).try();
        });
        $elem.on("resourcesButton-click", function (event) {
            twoColumnLeftOverlayController.hideLeftColumn();
            stateManagerController.pushAsync("resources-state", { segue: appearInstantSegue }).try();
        });

        $scheduleButton.on("click", function () {
            $elem.trigger({
                type: "scheduleButton-click"
            })
        });
        $inventoryButton.on("click", function () {
            $elem.trigger({
                type: "inventoryButton-click"
            })
        });
        $newHireButton.on("click", function () {
            $elem.trigger({
                type: "newHireButton-click"
            })
        });
        $resourcesButton.on("click", function () {
            $elem.trigger({
                type: "resourcesButton-click"
            })
        });
        init();
    }

});