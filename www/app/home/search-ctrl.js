(function () {
    angular.module('eliteApp')
        .controller('searchCtrl', ['$scope', 'searchApi', searchCtrl])
        .directive('myMap', function () {
            // directive link function
            var link = function (scope, element, attrs) {
                var map, infoWindow;
                var markers = [];

                // map config
                var mapOptions = {
                    center: new google.maps.LatLng(scope.defaultLoc.lat, scope.defaultLoc.lon),
                    zoom: scope.defaultLoc.zoom || 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                };

                // init the map
                function initMap() {
                    if (map === void 0) {
                        map = new google.maps.Map(element[0], mapOptions);
                    }
                }

                // place a marker
                function setMarker(map, position, title, content) {
                    var marker;
                    var markerOptions = {
                        position: position,
                        map: map,
                        title: title,
                        icon: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    };

                    marker = new google.maps.Marker(markerOptions);
                    markers.push(marker); // add marker to array

                    google.maps.event.addListener(marker, 'click', function () {
                        // close window if not undefined
                        if (infoWindow !== void 0) {
                            infoWindow.close();
                        }
                        // create new window
                        var infoWindowOptions = {
                            content: content
                        };
                        infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                        infoWindow.open(map, marker);
                    });
                }

                // show the map and place some markers
                initMap();

                var markers = scope.markers;
                var length = (markers.length > 0) ? markers.length : 0;
                for (let i = 0; i < length; i++) {
                    var html = "<a href='#/search/details/" + markers[i].id + "'>" + markers[i].title + "</a><p>Rate: $" + markers[i].rate + "</p>";
                    setMarker(map, new google.maps.LatLng(markers[i].loc.lat, markers[i].loc.lon), markers[i].title, html);
                }
            };

            return {
                restrict: 'A',
                template: '<div id="gmaps"></div>',
                replace: true,
                scope: {
                    markers: "=",
                    defaultLoc: "="
                },
                link: link
            };
        });

    function searchCtrl($scope, searchApi) {

        $scope.defaultLoc = {
            lat: 42.39084,
            lon: -72.527356,
            zoom: 13
        }

        // searchApi.get().$promise.then(function(data){
        //     $scope.markers = data;
        // });

        $scope.markers = [
            {
                "id": "CC1004 ",
                "title": "Child Care",
                "mon": {
                    "from": 7,
                    "to": 8
                },
                "tue": {
                    "from": 0,
                    "to": 0
                },
                "wed": {
                    "from": 7,
                    "to": 8
                },
                "thu": {
                    "from": 7,
                    "to": 8
                },
                "fri": {
                    "from": 0,
                    "to": 8
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 15,
                "loc": {
                    "lat": 42.391276,
                    "lon": -72.529051,
                    "geohash": "drs3jt1gndeg"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10907"
            },
            {
                "id": "CC1008 ",
                "title": "Child Care",
                "mon": {
                    "from": 10,
                    "to": 11
                },
                "tue": {
                    "from": 10,
                    "to": 11
                },
                "wed": {
                    "from": 10,
                    "to": 11
                },
                "thu": {
                    "from": 10,
                    "to": 11
                },
                "fri": {
                    "from": 0,
                    "to": 11
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 15,
                "loc": {
                    "lat": 42.386981,
                    "lon": -72.524953,
                    "geohash": "drs3jskfn1gq"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10921"
            },
            {
                "id": "CC1007 ",
                "title": "Child Care",
                "mon": {
                    "from": 9,
                    "to": 10
                },
                "tue": {
                    "from": 9,
                    "to": 10
                },
                "wed": {
                    "from": 9,
                    "to": 10
                },
                "thu": {
                    "from": 9,
                    "to": 10
                },
                "fri": {
                    "from": 0,
                    "to": 10
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 12,
                "loc": {
                    "lat": 42.391878,
                    "lon": -72.523579,
                    "geohash": "drs3jtjyw4u4"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10743"
            },
            {
                "id": "CC1001 ",
                "title": "Child Care",
                "mon": {
                    "from": 12,
                    "to": 13
                },
                "tue": {
                    "from": 12,
                    "to": 13
                },
                "wed": {
                    "from": 12,
                    "to": 13
                },
                "thu": {
                    "from": 12,
                    "to": 13
                },
                "fri": {
                    "from": 0,
                    "to": 13
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 10,
                "loc": {
                    "lat": 42.386521,
                    "lon": -72.529523,
                    "geohash": "drs3js1x7s5y"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10921"
            },
            {
                "id": "CC1003 ",
                "title": "Child Care",
                "mon": {
                    "from": 8,
                    "to": 9
                },
                "tue": {
                    "from": 8,
                    "to": 9
                },
                "wed": {
                    "from": 8,
                    "to": 9
                },
                "thu": {
                    "from": 8,
                    "to": 9
                },
                "fri": {
                    "from": 0,
                    "to": 9
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 14,
                "loc": {
                    "lat": 42.388914,
                    "lon": -72.531519,
                    "geohash": "drs3js8jm479"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10931"
            },
            {
                "id": "CA1013",
                "title": "Childcare Assistant",
                "mon": {
                    "from": 12,
                    "to": 13
                },
                "tue": {
                    "from": 0,
                    "to": 0
                },
                "wed": {
                    "from": 0,
                    "to": 0
                },
                "thu": {
                    "from": 12,
                    "to": 13
                },
                "fri": {
                    "from": 0,
                    "to": 0
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 10,
                "loc": {
                    "lat": 42.392512,
                    "lon": -72.530928,
                    "geohash": "drs3jt2d6ch0"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10759"
            },
            {
                "id": "CM1015",
                "title": "Community Action",
                "mon": {
                    "from": 13,
                    "to": 14
                },
                "tue": {
                    "from": 13,
                    "to": 14
                },
                "wed": {
                    "from": 13,
                    "to": 14
                },
                "thu": {
                    "from": 13,
                    "to": 14
                },
                "fri": {
                    "from": 0,
                    "to": 14
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 14,
                "loc": {
                    "lat": 42.429062,
                    "lon": -72.450323,
                    "geohash": "drs3r7gr1n7t"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10921"
            },
            {
                "id": "GD1021",
                "title": "Gardening",
                "mon": {
                    "from": 13,
                    "to": 14
                },
                "tue": {
                    "from": 13,
                    "to": 14
                },
                "wed": {
                    "from": 13,
                    "to": 14
                },
                "thu": {
                    "from": 0,
                    "to": 0
                },
                "fri": {
                    "from": 0,
                    "to": 0
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 0,
                    "to": 0
                },
                "rate": 15,
                "loc": {
                    "lat": 42.425141,
                    "lon": -72.512597,
                    "geohash": "drs3mgmbq52z"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10723"
            },
            {
                "id": "GD1022",
                "title": "Gardening",
                "mon": {
                    "from": 11,
                    "to": 12
                },
                "tue": {
                    "from": 0,
                    "to": 0
                },
                "wed": {
                    "from": 0,
                    "to": 0
                },
                "thu": {
                    "from": 11,
                    "to": 12
                },
                "fri": {
                    "from": 0,
                    "to": 12
                },
                "sat": {
                    "from": 0,
                    "to": 0
                },
                "sun": {
                    "from": 11,
                    "to": 12
                },
                "rate": 12,
                "loc": {
                    "lat": 42.39084,
                    "lon": -72.527356,
                    "geohash": "drs3jt50w17d"
                },
                "url": "https://www.umass.edu/umfa/job-board-detail/10638"
            }
        ];

    }
})();