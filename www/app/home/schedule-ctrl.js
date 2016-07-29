(function () {
    angular.module('eliteApp').controller('scheduleCtrl', ['ionicDatePicker', scheduleCtrl])

    function scheduleCtrl(ionicDatePicker) {
        var vm = this;

        vm.hours = [
            {
                value: 0,
                hour: '-- Select --'
            },
            {
                value: 7,
                hour: '7:00 am'
            },
            {
                value: 8,
                hour: '8:00 am'
            },
            {
                value: 9,
                hour: '9:00 am'
            },
            {
                value: 10,
                hour: '10:00 am'
            },
            {
                value: 11,
                hour: '11:00 am'
            },
            {
                value: 12,
                hour: '12:00 am'
            },
            {
                value: 13,
                hour: '1:00 pm'
            },
            {
                value: 14,
                hour: '2:00 pm'
            },
            {
                value: 15,
                hour: '3:00 pm'
            },
            {
                value: 16,
                hour: '4:00 pm'
            },
            {
                value: 17,
                hour: '5:00 pm'
            },
        ];

        
        

        vm.toHour = '0';
        vm.fromHour = '0';

        vm.schedule = {
            toHour: '0',
            fromHour: '0',
            selectedDate: new Date()
        }

        var ipObj1 = {
            callback: function (val) {  //Mandatory
                console.log('Return value from the datepicker popup is : ' + val, new Date(val));
                vm.schedule.selectedDate =  new Date(val);
            },
            disabledDates: [            //Optional
                new Date(2016, 2, 16),
                new Date(2015, 3, 16),
                new Date(2015, 4, 16),
                new Date(2015, 5, 16),
                new Date('Wednesday, August 12, 2015'),
                new Date("08-16-2016"),
                new Date(1439676000000)
            ],
            from: new Date(2012, 1, 1), //Optional
            to: new Date(2016, 10, 30), //Optional
            inputDate: new Date(),      //Optional
            mondayFirst: true,          //Optional
            disableWeekdays: [0],       //Optional
            closeOnSelect: false,       //Optional
            templateType: 'modal'       //Optional
        };

        vm.openDatePicker = function () {
            ionicDatePicker.openDatePicker(ipObj1);
        };

    }
})();