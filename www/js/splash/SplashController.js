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
        navigation.navigateToPath( "/view/login/login.html" );
    },

    navigateToMain: function () {
        navigation.navigateToPath( "/view/main/main.html" );
    }

};
