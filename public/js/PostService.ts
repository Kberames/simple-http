namespace App {
    export class PostService {
        static $inject = ['$http'];

        private httpService;
        public postList;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.getPostList();
        }

        public getPostList () {
            let promise = this.httpService ({
                url: '/posts',
                method: 'GET'
            });

            return promise;
        }

        public getPost (id) {
            console.log ('getPost inside PostService');

            let promise = this.httpService ({
                url: '/posts',
                method: 'GET',
                params: {
                    id: id
                }
            });

            return promise;
        }


        public savePost (postObj, id) {

            let promise = this.httpService ({
                url: '/posts',
                method: 'POST',
                data: postObj
            });

            return promise;

        }

        public deletePost (id) {
            console.log ('Deleting Post: ' + id);

            let promise = this.httpService ({
                url: '/posts/' + id,
                method: 'DELETE'
            });

            return promise;
        }

    }

    let app = angular.module ('App');
    app.service ('PostService', PostService);

}
