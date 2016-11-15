namespace App {
    export class HomeController {
        static $inject = ['$http'];

        private httpService;

        public postList;

                constructor (
                    $http: angular.IHttpService,
                ) {
                    this.httpService = $http;

                    this.getPostList();

                }

        public getPostList () {
            this.httpService ({
                url: '/posts',
                method: 'GET'
            })
            .success ((response)=> {
                this.postList = response;

            })
            .error ((response)=> {

            })
        }
    }
}
