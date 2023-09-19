const user = document.querySelector('#user');
        const email = document.querySelector('#email');
        const pass = document.querySelector('#pass');

        function alertForm(classThis, message) {
            let alert = document.querySelector(`.${classThis}`)
            alert.innerHTML = message;
        }


        var submit = false;

        function checkSubmit() {
            let flash;
            flash = (isEmptyString(user.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (isEmptyString(pass.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

           
            return true;

        }

        //
        const signin = document.querySelector('.signin')
        signin.addEventListener ('click', () =>{
             //signin
             checkUser();
             checkPass();
 
        })
        
        //user
        user.addEventListener('blur', () => {
            checkUser()
            console.log(submit)
        })
        user.addEventListener('focus', () => {
            alertForm('user', '')

        })

        //password
        pass.addEventListener('blur', () => {
            checkPass()
            console.log(submit)
        })
        pass.addEventListener('focus', () => {
            alertForm('pass', '')

        })


        function checkUser() {
            if (isEmptyString(user.value)) {
                alertForm('user', 'Vui lòng nhập user')
                submit = false;
            }
            else {
                alertForm('user', '')
                submit = true;
            }
        }

        function checkPass() {
            if (isEmptyString(pass.value)) {
                alertForm('pass', 'Vui lòng nhập password')
                submit = false;
            }
            else {
                alertForm('pass', '')
                submit = true;
            }
        }


        function isEmptyString(str) {
            return str.trim() === '';
        }

        function submitFn() {
            return checkSubmit();
        }
