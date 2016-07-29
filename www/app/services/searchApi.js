(function() {
    angular.module('eliteApp').factory('searchApi', ['$resource', searchApi]);

    function searchApi($resource) {
        var resourceUrl = "http://vm-899414.ops.global.ad:7070/search?geo=42.371736%2C%20-72.545460&day=mon&from=12&to=19";
        return $resource(resourceUrl, {}, {
            //get: { method: 'Get' }
        });
    }
})();

