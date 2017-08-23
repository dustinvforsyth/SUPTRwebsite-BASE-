BASE.require([
    "jQuery",

], function () {

    BASE.namespace("app.components.states");

    app.components.states.NewHireState = function (elem, tags, scope) {
        var self = this;
        var $elem = $(elem);
        var $dailyResponsibility = $(tags["daliy-responsibilities"]);
        var $aideExpectations = $(tags["aide-expectations"]);
        var $employeeHandbook = $(tags["employee-handbook"]);
        var $vacationRequest = $(tags["vacation-request"]);
        var $bracingExpectations = $(tags["bracing-expectations"]);
        var $hippa = $(tags["hippa"]);

        $elem.on("dailyResponsibility-click", function (event) {
            window.open('https://drive.google.com/file/d/0B3XAyRVChxIHRHBnenJnVlJGbnM/view?usp=sharing', '_blank');
        });

        $elem.on("aideExpectations-click", function (event) {
            window.open('https://drive.google.com/file/d/0B3XAyRVChxIHb2tXYkIyb2k0Rzg/view?usp=sharing', '_blank');
        });

        $dailyResponsibility.on("click", function () {
            $elem.trigger({
                type: "dailyResponsibility-click"
            })
        });

        $aideExpectations.on("click", function () {
            $elem.trigger({
                type: "aideExpectations-click"
            })
        });

    }



});