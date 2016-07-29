(function () {
    angular.module("eliteApp", ['ionic', 'ionic-datepicker', 'uiGmapgoogle-maps', 'ngResource'])
        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(ready);

            function ready() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            }
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    abstract: true,
                    url: "/home",
                    templateUrl: "app/home/home.html"
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/login/login.html'
                })
                .state('home.schedule', {
                    url: '/schedule',
                    views: {
                        "tab-schedule": {
                            templateUrl: 'app/home/schedule.html'
                        }
                    }
                })
                .state('home.profile', {
                    url: '/profile',
                    views: {
                        "tab-profile": {
                            templateUrl: 'app/home/profile.html'
                        }
                    }
                })
                .state('home.search', {
                    url: '/search',
                    views: {
                        "tab-search": {
                            templateUrl: 'app/home/search.html'
                        }
                    }
                })
                .state('job-description', {
                    url: '/search/details/:id',
                    templateUrl: 'app/home/job-description.html'
                })
                .state('search-list', {
                    url: '/search/list',
                    templateUrl: 'app/home/search-list.html'
                });

            $urlRouterProvider.otherwise('/login');
        })
        .config(function (ionicDatePickerProvider) {
            var datePickerObj = {
                inputDate: new Date(),
                setLabel: 'Set',
                todayLabel: 'Today',
                closeLabel: 'Close',
                mondayFirst: false,
                weeksList: ["S", "M", "T", "W", "T", "F", "S"],
                monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
                templateType: 'popup',
                from: new Date(),
                to: new Date(2018, 8, 1),
                showTodayButton: true,
                dateFormat: 'dd MMMM yyyy',
                closeOnSelect: false,
                disableWeekdays: [0]
            };
            ionicDatePickerProvider.configDatePicker(datePickerObj);
        });
})(window);