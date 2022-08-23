function getPasswordChecker(password) {
    validPassword = password
    // вместо назначения valid_password должна быть функция получения пароля из БД например

    function checkValidPassword(passwordToVerify){
        if (passwordToVerify === validPassword) {
            return true
        }

        return false
    }

    return checkValidPassword
}

check = getPasswordChecker('123')
console.log(check.validPassword)
console.log(check('345'))
console.log(check('123'))
console.log(check(123))
console.log(check('bad'))