namespace App {
    export class SampleFormController {
        public fullName;
        public btnGroup;

        constructor () {
            this.fullName = "";

            // Create an object to track the true or false
            // of each of the buttons
            this.btnGroup = {
                left: false,
                middle: false,
                right: true
            }
        }

        public saveUser (userRegister){
            console.log ('Saving the new user.');
            console.log ('Form Object" ', userRegister);

            if (userRegister.$valid == false) {
                alert ('Please fill out the form correctly');
            }
            else {
                alert ('Submitting new user data...')
            }
        }
    }
}
