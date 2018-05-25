var routerApp = angular.module('qingYe', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'content@':{
                    templateUrl: 'home/home.html'
                }
            }
        })
//      .state('home.list', {
//          url: '/list',
//          templateUrl: 'tpls2/home-list.html',
//          controller: function($scope) {
//              $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
//          }
//      })


//      .state('home.paragraph', {
//          url: '/paragraph',
//          template: 'I could sure use a scoop of ice-cream. '
//      })


        .state('yingYi', {
            url: '/yingYi',
            views: {
                'content@': {
                    templateUrl: 'yingYi/yingYi.html'
                }
//              'columnOne@about': {
//                  template: '这里是第一列的内容'
//              },
//              'columnTwo@about': {
//                  templateUrl: 'tpls2/table-data.html',
//                  controller: 'Controller'
//              }
            }
       })
//      .state('yingYi.comprehension', {
//          url: '/comprehension',
//          templateUrl: 'comprehension/comprehension.html',
////          controller: function($scope) {
////              $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
////          }
//      })
//      .state('yingYi.translation', {
//          url: '/translation',
//          templateUrl: 'translation/translation.html',
////          controller: function($scope) {
////              $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
////          }
//     })
//      .state('yingYi.clozeText', {
//          url: '/clozeText',
//          templateurl:'clozeText/clozeText.html'
//      })
//      .state('yingYi.writing', {
//          url: '/writing',
//          templateurl:'writing/writing.html'
//      })


        .state('yingEr', {
            url: '/yingEr',
            views: {
                'content@': {
                    templateUrl: 'yingEr/yingEr.html'
                }
            }
       })
        .state('myCourse', {
            url: '/myCourse',
            views: {
                'content@': {
                    templateUrl: 'myCourse/myCourse.html'
                }
            }
       })
        .state('buying', {
            url: '/buying',
            views: {
                'content@': {
                    templateUrl: 'buying/buying.html'
                }
            }
       });
    });
//  routerApp.controller('Controller', function($scope) {
//      $scope.message = 'test';
//      $scope.topics = [{
//          name: 'Butterscotch',
//          price: 50
//      }, {
//          name: 'Black Current',
//          price: 100
//      }, {
//          name: 'Mango',
//          price: 20
//      }];
//  });
