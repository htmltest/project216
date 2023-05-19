document.addEventListener('DOMContentLoaded', function () {

    var loginInputs = document.querySelectorAll('.login-inp');

    for (var i = 0; i < loginInputs.length; i++) {
        if (loginInputs[i].value != '') {
            loginInputs[i].parentNode.classList.add('focus');
        }
        loginInputs[i].addEventListener('focus', function (e) {
            e.target.parentNode.classList.add('focus');
        });

        loginInputs[i].addEventListener('blur', function (e) {
            if (e.target.value == '') {
                e.target.parentNode.classList.remove('focus');
            }
        });
    }

    var inputActive = document.activeElement;
    inputActive.parentNode.classList.add('focus');

});