namespace App {
    export class PostEditController {
        static $inject = ['$http', '$state'];

        private httpService;
        private stateService;

        public post;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState
        ) {
            this.httpService = $http;
            this.stateService = $state;

            console.log ('Passed parameters: ', this.stateService.params);
            this.httpService ({
              url: '/posts/' + this.stateService.params.id,
              method: 'GET'
            })
            .success ((response) => {
              console.log (response);
              this.post = response;
            })
            .error (() => {
            })
        }

        public save () {
            console.log ('save method fired');

            let updateID = this.stateService.params.id;

            this.httpService ({
              url: '/posts/' + updateID,
              method: 'PUT',
              data: {
                  title: this.post.title,
                  description: this.post.description,
                  author: this.post.author
              }
            })
            .success ((response) => {
                console.log ('Post saved.');
                this.stateService.go ('posts');
            })
            .error (() => {
            })

        }
    }
  }
