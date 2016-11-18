namespace App {
    export class SampleFormController {
        static $inject = ['$http'];

        private httpService;

        public messageResult;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;

        }
    }
}
