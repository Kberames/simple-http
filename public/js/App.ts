namespace App {
    let app = angular.module ('App', ['ui.router', 'ui.bootstrap']);


    app.config ([
        '$stateProvider',

        ($stateProvider) => {
            $stateProvider
                .state ('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'homeController'
                })
                .state ('http', {
                    url: '/http',
                    templateUrl: 'templates/http.html',
                    controller: App.HttpController,
                    controllerAs: 'httpController'
                })
                .state ('sample-form', {
                    url: '/sample-form',
                    templateUrl: 'templates/sample-form.html',
                    controller: App.SampleFormController,
                    controllerAs: 'sampleFormController'
                })
                .state ('posts', {
                    url: '/posts',
                    templateUrl: 'templates/posts.html',
                    controller: App.PostController,
                    controllerAs: 'postController'
                })
                .state ('posts-edit', {
                    url: '/posts/edit',
                    templateUrl: 'templates/posts-edit.html',
                    controller: App.PostEditController,
                    controllerAs: 'postEditController',
                    params: {
                      id: null
                    }
                })
            ;
        }
    ]);
}
