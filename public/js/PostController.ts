namespace App {
    export class PostController {
        static $inject = ['$http', '$state', 'PostService'];

        private httpService;
        private stateService;
        private postService;

        public postList;
        public currentPost;
        public newPost;

        public postObject;

        constructor (
            $http: angular.IHttpService,
            $state: angular.ui.IState,
            postService: App.PostService
        ) {
            this.httpService = $http;
            this.stateService = $state;
            this.postService = postService;

            this.postObject = {
                title: '',
                description: '',
                author: ''
            };

            console.log ('- test: ', this.stateService);

            this.postList = [];
            this.newPost = {};

            this.getPostList ();
        }

        public getPostList () {
            console.log ('here');
            this.postService.getPostList()
                .success ((response) => {
                    console.info ('This is the response: ', response);
                    this.postList = response;
                })
                .error ((response) => {
                    console.error ('There was an error with the  to getPostList ');

                })
        }

        public getPost (id) {
            console.log ('here');
            this.postService.getPost(id)
            .success ((response) => {
                console.log ('Test data: ', response);
                // this.postList = response;
                this.currentPost = response [0];
            })
            .error ((response) => {
            });
        }

        public save () {
            //console.log ('Data to save: ', this.title);


            this.postService.savePost(this.postObject, -1)
                .success ((response) => {
                    console.log ('Test data: ', response);
                })
                .error ((response) => {
                });
            this.getPostList ();
        }

        public deletePost (id) {

            this.postService.deletePost (id)
                .success ((response) => {
                    this.stateService.go ('posts');
                })
                .error ((response) => {
                });

            this.getPostList ();
        }

        public editPost (postId) {
            console.log ('post id: ' + postId);

            this.stateService.go ('posts-edit',
                {
                    id: postId
                }
            );
        }

        public test () {
            console.log ('***** TEST ****');
        }
    }
}
