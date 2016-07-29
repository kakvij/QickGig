(function () {
    angular.module('eliteApp').controller('profileCtrl', [profileCtrl]);

    function profileCtrl() {
        var vm = this;


        vm.profile = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com',
            phone: '(347) 345-9898',
            useLocation: true,
            skills: [
                'Child Care',
                'Childcare Assistant',
                'Bus Driver',
                'Community Action',
                'Pizza Delivery Drivers',
                'Gardening'
            ]
        };

        vm.addSkill = function (skill) {
            console.log(skill);
            if (skill !== undefined && skill !== "") {
                vm.profile.skills.push(skill);
                vm.skill = "";
            }
        };

        vm.removeSkill = function (index) {
            if (index > -1) {
                vm.profile.skills.splice(index, 1);
            }
        }
    }
})();

