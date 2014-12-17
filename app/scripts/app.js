'use strict';

/* App Module */

var lcApp = angular.module('lcApp', ['ngSanitize', 'ngRoute', 'lcServices', 'ngAnimate', 'lcControllers']).config(function($sceDelegateProvider) {
         $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://lcapp.meetnavis.com/**']);  

          

});



lcApp.run(function ($rootScope) {
    $('.navmenu').offcanvas({'toggle': false});
    
    $rootScope.$on('$routeChangeStart', function ($window, $location, event, next, current) {
        $('.navmenu').offcanvas('hide');   
        /*$location.reload();*/
   

    });


    $rootScope.catColor = function(colorParam) {
             if (colorParam == 'All') {
                return '#F7921E';
             } else if (colorParam == 'Res-Rev Managers') {
                return '#51AA4E;';
             } else if (colorParam == 'Owners-GMs') {
                return '#ED4645';
             } else if (colorParam == 'Marketing Managers') {
                return '#5C8DAB';
             } else if (colorParam == 'Human Resources') {
                return '#C9DD7E';
             } else {
                return '#FFFFFF'; //General
             }
    };

}); 

lcApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
        //reloadOnSearch: false
      }).
       when('/welcome/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      }).
        when('/attendees/', {
        templateUrl: 'views/attendee-list.html',
        controller: 'AttendeeCtrl'        
      }).
      when('/speakers/', {
        templateUrl: 'views/speaker-list.html',
        controller: 'SpeakerCtrl'
        //reloadOnSearch: false
      }).
      when('/agenda/', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
        //reloadOnSearch: false
      }).
      when('/agenda/day1/', {
        templateUrl: 'views/session-list.html',
        controller: 'AgendaDay1Ctrl'
        //reloadOnSearch: false        
      }).
      when('/agenda/day2/', {
        templateUrl: 'views/session-list2.html',
        controller: 'AgendaDay2Ctrl'
        //reloadOnSearch: false
      }).
      when('/agenda/day1/:ID', {
        templateUrl: 'views/session-detail1.html',
        controller: 'AgendaDetailCtrl1'
        //reloadOnSearch: false
      }).
      when('/agenda/day2/:ID', {
        templateUrl: 'views/session-detail2.html',
        controller: 'AgendaDetailCtrl2'
        //reloadOnSearch: false
      }).
      when('/survey/', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl'
        //reloadOnSearch: false
      }).
      when('/session-survey/:Day/:ID/', {
        templateUrl: 'views/session-survey.html',
        controller: 'SessionSurveyCtrl'
        //reloadOnSearch: false
      }).
       when('/location/', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
        //reloadOnSearch: false
      }).
      otherwise({
        redirectTo: '/'

      });
  }]);



lcApp.run(function ($rootScope, $location) {

    var history = [];

    


    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

    /*$rootScope.getURL = function(thisUrl) {
             if(thisUrl === '') {
                thisUrl = '#/';
             }
             var random = Math.random();
             return thisUrl + '?r=' + random;
    }; */   

   

});

//Filesystem code
window.appRootDirName = "NAVIS";

$rootScope.getRandom = function() {
               var newrandom = Math.random();
               return newrandom;
};  

function getDownload(downloadUrl, deviceFilePath) {
  if (navigator.userAgent.match(/(Android|BlackBerry)/)) {
    document.addEventListener("deviceready", onDeviceReady, false);
       
    downloadFile(downloadUrl, deviceFilePath);
  } else {
    //onDeviceReady(); //this is the browser
    window.location = downloadUrl;
  }  
}
 
function onDeviceReady() {
  console.log("device is ready");
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}
 
function fail() {
  console.log("failed to get filesystem");
}
 
function gotFS(fileSystem) {
  console.log("filesystem obtained");
  window.fileSystem = fileSystem;
  fileSystem.root.getDirectory(window.appRootDirName, {
    create : true,
    exclusive : false
  }, dirReady, fail);
}
 
function dirReady(entry) {
  window.appRootDir = entry;
  console.log("application dir is ready");
} 
 
function downloadFile(downloadUrl, deviceFilePath) {
  var fileTransfer = new FileTransfer();
 
  var url = downloadUrl;
  var filePath = window.appRootDir.fullPath + deviceFilePath;
  
  fileTransfer.download(
      url,
      filePath,
      function(entry) {
          alert("download complete: " + entry.fullPath);
      },
      function(error) {
          alert("download error" + error.source);
      }
  );
}
