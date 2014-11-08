

lcApp.directive('connError', function() {
  return {
      restrict: 'E',
      template: '<span class="error">An active Internet connection is required for this app.</span>'
  };
});