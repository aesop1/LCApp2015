'use strict';

/* App Module */

var lcApp = angular.module('lcApp', ['ngSanitize','ngRoute', 'lcServices', 'ngAnimate', 'lcControllers']).config(function($sceDelegateProvider) {
         $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin resource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://lcapp.meetnavis.com/**']);      
});

lcApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html',
        controller: 'HomeCtrl'
      }).
       when('/welcome', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
      }).
        when('/attendees', {
        templateUrl: 'views/attendee-list.html',
        controller: 'AttendeeCtrl'
      }).
      when('/speakers', {
        templateUrl: 'views/speaker-list.html',
        controller: 'SpeakerCtrl'
      }).
      when('/agenda', {
        templateUrl: 'views/agenda.html',
        controller: 'AgendaCtrl'
      }).
      when('/agenda/day1', {
        templateUrl: 'views/session-list.html',
        controller: 'AgendaDay1Ctrl'        
      }).
      when('/agenda/day2', {
        templateUrl: 'views/session-list2.html',
        controller: 'AgendaDay2Ctrl'
      }).
      when('/agenda/:Day/:ID', {
        templateUrl: 'views/session-detail.html',
        controller: 'AgendaDetailCtrl'
      }).
      when('/survey', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl'
      }).
      when('/session-survey/:Day/:ID', {
        templateUrl: 'views/session-survey.html',
        controller: 'SessionSurveyCtrl'
      }).
       when('/location', {
        templateUrl: 'views/location.html',
        controller: 'LocationCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

lcApp.run(function ($rootScope, $location) {

    var history = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        history.push($location.$$path);
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
        $location.path(prevUrl);
    };

});

//Filesystem code
window.appRootDirName = "NAVIS";

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
