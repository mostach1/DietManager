var controller = {

    onCreate: function() { },

    onDeviceReady: function() {
        setTimeout(this.checkIsUserLoggedIn, 1500);
    },

    checkIsUserLoggedIn: function(){
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                controller.navigateToMain();
            } else {
                controller.navigateToLogin();
            }
        });
    },

    navigateToLogin: function () {
        window.location.href = "/view/login/login.html";
    },

    navigateToMain: function () {
        window.location.href = "/view/main/main.html";
    }

};
