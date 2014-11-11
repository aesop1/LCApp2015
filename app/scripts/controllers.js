  

var lcControllers = angular.module('lcControllers', []);


lcControllers.controller('HomeCtrl', function($http, $scope, $rootScope, $sce, $routeParams) {
     $rootScope.bodyClass = 'home';
     $scope.navUrl = 'views/nav.html';
}); 

lcControllers.controller('WelcomeCtrl', function($http, $scope, $routeParams, trustService, ajaxService, errorService) {
     $scope.navUrl = 'views/nav.html';
     $scope.trustHTML = trustService.trustHTML;
     var dataUrl = 'http://lcapp.meetnavis.com/welcome';
     ajaxService.getData(dataUrl).then(function(d) {
         if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.welcome = d;           
         }
     });         
}); 


lcControllers.controller('LocationCtrl', function($http, $scope, $routeParams, trustService, ajaxService, errorService) {
     $scope.navUrl = 'views/nav.html';
     $scope.trustHTML = trustService.trustHTML;
     var dataUrl = 'http://lcapp.meetnavis.com/location';
     ajaxService.getData(dataUrl).then(function(d) {
           if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.location = d; 
        }

     });         
}); 


lcControllers.controller('AttendeeCtrl', function($http, $scope, $routeParams, trustService, ajaxService, errorService) {
     $scope.navUrl = 'views/nav.html';
     $scope.trustHTML = trustService.trustHTML;
     var dataUrl = 'http://lcapp.meetnavis.com/attendees.json';
     ajaxService.getData(dataUrl).then(function(d) {
         if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.attendees = d;
         }
                    
     });         
}); 


lcControllers.controller('SpeakerCtrl', function($http, $scope, $rootScope, $routeParams, trustService, ajaxService, errorService) {
     $scope.navUrl = 'views/nav-speakers.html';
     $rootScope.bodyClass = 'speakers';
     $scope.trustHTML = trustService.trustHTML;
     var dataUrl = 'http://lcapp.meetnavis.com/speakers.json';
     ajaxService.getData(dataUrl).then(function(d) {
         if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.speakers = d;
        }
                     
     });         
}); 


lcControllers.controller('AgendaCtrl', function($scope, $rootScope, $sce, $routeParams) {
     $scope.navUrl = 'views/nav-agenda.html';
     $rootScope.bodyClass = 'agenda';
}); 


lcControllers.controller('AgendaDay1Ctrl', function($scope, $rootScope, $routeParams, trustService, ajaxService, errorService) {
        $scope.navUrl = 'views/nav-agenda.html';
        $rootScope.bodyClass = 'agenda';
        $scope.day = "Day 1";
        $scope.trustHTML = trustService.trustHTML;
        var dataUrl = 'http://lcapp.meetnavis.com/agenda/agenda-day1.json';         
        ajaxService.getData(dataUrl).then(function(d) {
            if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.sessions = d;

            }                   
           
        });      
}); 


lcControllers.controller('AgendaDay2Ctrl', function($scope, $rootScope, $routeParams, trustService, ajaxService, errorService) {
        $scope.navUrl = 'views/nav-agenda2.html';
        $rootScope.bodyClass = 'agenda';
        $scope.day = "Day 2";        
        $scope.trustHTML = trustService.trustHTML;
        var dataUrl = 'http://lcapp.meetnavis.com/agenda/agenda-day2.json';         
        ajaxService.getData(dataUrl).then(function(d) {
           if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
            $scope.sessions = d;
            }
           
        });      
}); 


lcControllers.controller('AgendaDetailCtrl', function($scope, $routeParams, trustService, ajaxService, errorService) {
    $scope.navUrl = 'views/nav.html';
    $scope.trustHTML = trustService.trustHTML;
    var dataUrl = 'http://lcapp.meetnavis.com/agenda/agenda-' + $routeParams.Day + '/' + $routeParams.Day + '/' +  $routeParams.ID + '.json';    
    ajaxService.getData(dataUrl).then(function(d) {
         if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
           $scope.sessiondetail = d;
          }
    });

 });


lcControllers.controller('SurveyCtrl', function($scope, $routeParams, trustService, ajaxService, errorService) {
    $scope.navUrl = 'views/nav.html';
 });


lcControllers.controller('SessionSurveyCtrl', function($scope, $routeParams, trustService, ajaxService, errorService) {
    $scope.navUrl = 'views/nav.html';
    $scope.trustHTML = trustService.trustHTML;
    var dataUrl = 'http://lcapp.meetnavis.com/agenda/agenda-' + $routeParams.Day + '/' + $routeParams.Day + '/' +  $routeParams.ID + '.json';
    $scope.sessionDay = $routeParams.Day;
    $scope.sessionID = $routeParams.ID;
    ajaxService.getData(dataUrl).then(function(d) {
         if(!d) {               
               $scope.errorMsg = errorService.connError();
            } else {  
           $scope.surveydetail = d;
       }
    });
   

 });

    
 