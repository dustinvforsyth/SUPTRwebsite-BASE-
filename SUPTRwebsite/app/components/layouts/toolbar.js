BASE.require([
    "jQuery"

], function () {

    BASE.namespace("app.components.layouts");

    app.components.layouts.Toolbar = function (elem, tags, scope) {
        var self = this;
        var $elem = $(elem);
        var $hamburgerButton = $(tags['hamburgerButton']);
        var $backButton = $(tags['backButton']);

        $hamburgerButton.on('click', function () {
            $elem.trigger({
                type: 'hamburger-menu-click'
            });
        });

        $backButton.on('click', function () {
            $elem.trigger({
                type: 'back-clicked'
            });
        });
    }
})