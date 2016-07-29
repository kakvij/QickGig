(function() {
    angular.module('eliteApp').controller('jobDescriptionCtrl', ['$stateParams', jobDescriptionCtrl]);

    function jobDescriptionCtrl($stateParams) {
        var vm = this;

        vm.locationId = $stateParams.id;


    }
})();