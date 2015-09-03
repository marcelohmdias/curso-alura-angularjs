(function() {
  'use struct';
  angular.module('alurapic')
    .config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
      });

      $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/fotos.html',
        controller: 'FotosController'
      });

      $routeProvider.otherwise({redirectTo: '/fotos'});
    });
})();