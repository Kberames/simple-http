namespace App {
    export class PostService {
        static $inject = ['$http'];

        private httpService;
        public postList;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
        }

        public getPostList () {
            let promise = this.httpService ({
                url: '/posts',
                method: 'GET'
            });

            return promise;
        }
    }

    let app = angular.module ('App');
    app.service ('PostService', PostService);

}
