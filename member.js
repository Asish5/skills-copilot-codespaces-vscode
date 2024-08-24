function skillsMember(){
    return{
         restrict: 'E',
                  templateUrl: 'app/members/skillsMember.html',
                    controller: 'SkillsMemberController',
                    controllerAs: 'skillsMemberCtrl',   
                    bindToController: true,
                                        scope: {
                        member: '=',
                        skills: '='
                    }
    }

}
