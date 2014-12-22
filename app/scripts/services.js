'use strict';


var lcServices = angular.module('lcServices', []);

	lcServices.factory('ajaxService', function($http, $q, errorService) {
      
	  var ajaxService = {
    	getData: function(dataUrl) {
          var promise = $http.get(dataUrl, {cache: true}).then(function (response) { 

            return response.data;
            
          }, function(resp) {
				// resp with error
							

          });
           // Return the promise to the controller
          return promise;

        } //end getData

       
      };
      
      return ajaxService;
		
	});

	lcServices.factory('trustService', function($sce) {

		return {
			trustHTML: function(input) {
            	return $sce.trustAsHtml(input);
         	} 
         }

	});


	lcServices.factory('errorService', function() {

		var errorService = {
			connError: function() {
				return 'This app requires an active Internet connection!';
			}
		};

		return errorService;

	});

	lcServices.factory('snifferService', function() {

		var snifferService = {
			getICalLink: function() {
				var isMobile = {
    				Android: function() {
        				return navigator.userAgent.match(/Android/i) ? true : false;
    				},
    				BlackBerry: function() {
        				return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    				},
    				iOS: function() {
        				return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    				},
    				Windows: function() {
        				return navigator.userAgent.match(/IEMobile/i) ? true : false;
    				},
    				any: function() {
        				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    				}
				};

				if(isMobile.Android() === true) {
                     return '';
				} else {
					 return '';
				}
			}
		};

	});