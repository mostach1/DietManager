var controller = {

    loginButton : null,
    registerButton : null,
    usernameInput : null,
    passwordInput : null,
    errorLabel : null,

    onCreate: function() { },

    onDeviceReady: function() {
        this.loginButton = $("#loginbtn");
        this.registerButton = $("#registerbtn");
        this.usernameInput = $("#login_input");
        this.passwordInput = $("#password_input");
        this.errorLabel = $("#errorlabel");

        this.loginButton.click(this.onLoginClicked.bind(this));
        this.registerButton.click(this.navigateToRegister.bind(this));
    },

    onLoginClicked: function () {
        var email = this.usernameInput.val();
        var password = this.passwordInput.val();
        console.log("login:" + email + " pass:" + password);
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
            controller.navigateToMain();
        }).catch(function(error) {
            controller.errorLabel.text(error.code + ":" + error.message);
        });
    },

    navigateToRegister: function () {
        navigation.navigateToPath(  "/view/register/register.html" );
    },

    navigateToMain: function () {
        navigation.navigateToPath( "/view/main/main.html" );
    }

};
