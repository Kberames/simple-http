namespace App {
    export class SampleFormController {
        public fullName;

        constructor () {
            this.fullName = "";
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
