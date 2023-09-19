const user = document.querySelector('#user');
        const email = document.querySelector('#email');
        const pass = document.querySelector('#pass');
        const firstname = document.querySelector('#firstname');
        const lastname = document.querySelector('#lastname');
        const address = document.querySelector('#address');
        const phone = document.querySelector('#phone');
        const confirmpass = document.querySelector('#confirm');






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

            flash = (isEmptyString(firstname.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (isEmptyString(lastname.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (isEmptyString(pass.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (!checkComfirmFn(confirmpass.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (!isValidEmail(email.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (isEmptyString(address.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;

            flash = (isEmptyString(phone.value)) ? false : true;
            console.log(flash);
            if (!flash) return false;


            //signin
            checkUser();
            checkPass();

            return true;

        }



        checkSubmit();
        console.log(checkSubmit())
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

        //comfirm
        confirmpass.addEventListener('blur', () => {
            checkComfirm()
            console.log(submit)
        })
        confirmpass.addEventListener('focus', () => {
            alertForm('confirm', '')

        })
        



        //email
        email.addEventListener('blur', () => {
            checkEmail()
            console.log(submit)
        })
        email.addEventListener('focus', () => {
            alertForm('email', '')

        })

        //firstanme
        firstname.addEventListener('blur', () => {
            checkFirstName()
            console.log(submit)
        })
        firstname.addEventListener('focus', () => {
            alertForm('firstname', '')

        })
        //lastname
        lastname.addEventListener('blur', () => {
            checkLastName()
            console.log(submit)
        })
        lastname.addEventListener('focus', () => {
            alertForm('lastname', '')

        })

        //address
        address.addEventListener('blur', () => {
            checkAddress()
            console.log(submit)
        })
        address.addEventListener('focus', () => {
            alertForm('address', '')

        })

        //phone
        phone.addEventListener('blur', () => {
            checkPhone()
            console.log(submit)
        })
        phone.addEventListener('focus', () => {
            alertForm('phone', '')

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

        function checkEmail() {
            if (!isValidEmail(email.value)) {

                alertForm('email', 'email không hợp lệ')
                submit = false;
            }
            else {
                alertForm('email', '')
                submit = true;
            }
        }


        function checkFirstName() {
            if (isEmptyString(firstname.value)) {

                alertForm('firstname', 'nhập tên không hợp lệ')
                submit = false;
            }
            else {
                alertForm('firstname', '')
                submit = true;
            }
        }


        function checkLastName() {
            if (isEmptyString(lastname.value)) {

                alertForm('lastname', 'nhập tên không hợp lệ')
                submit = false;
            }
            else {
                alertForm('lastname', '')
                submit = true;
            }
        }

        function checkLastName() {
            if (isEmptyString(lastname.value)) {

                alertForm('lastname', 'nhập tên không hợp lệ')
                submit = false;
            }
            else {
                alertForm('lastname', '')
                submit = true;
            }
        }

        function checkAddress() {
            if (isEmptyString(address.value)) {

                alertForm('address', 'nhập địa chỉ không hợp lệ')
                submit = false;
            }
            else {
                alertForm('address', '')
                submit = true;
            }
        }

        function checkPhone() {
            if (isEmptyString(phone.value)) {

                alertForm('phone', 'số điện thoại không hợp lệ')
                submit = false;
            }
            else {
                alertForm('phone', '')
                submit = true;
            }
        }



        function checkComfirm() {
            if (!checkComfirmFn(confirmpass.value)) {
                alertForm('confirm', 'mật khẩu không khớp')
                submit = false;
            }
            else {
                alertForm('confirm', '')
                submit = true;
            }
        }


        function isEmptyString(str) {
            return str.trim() === '';
        }


        function checkComfirmFn(passcf) {
            console.log(pass.value)
            console.log(passcf)
            if (passcf === pass.value) return true;
            return false;
        }

        


        function isValidEmail(email) {
            // Sử dụng biểu thức chính quy để kiểm tra định dạng email
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return pattern.test(email);
        }

        function submitFn() {
            return checkSubmit();
        }
