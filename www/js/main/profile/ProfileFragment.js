var profileFragment = {

    logoutButton : null,

    onCreate: function() { },

    onDeviceReady: function() {
        this.logoutButton = $("#logout_btn");
        this.logoutButton.click(this.onClickedLogout.bind(this));
    },

    onClickedLogout : function () {
        firebase.auth().signOut().then(function() {
            profileFragment.navigateToLogin();
        }).catch(function(error) {
            console.log(error);
        });
    },

    navigateToLogin : function () {
        window.location.href = "/view/login/login.html";
    }

};