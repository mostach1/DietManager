var profileFragment = {

    logoutButton : null,
    addButton : null,
    test_label : null,
    profile_name : null,

    onCreate: function() { },

    onDeviceReady: function() {
        this.logoutButton = $("#logout_btn");
        this.addButton = $("#add_btn");
        this.test_label = $("#test_label");
        this.profile_name = $("#profile_name");

        this.logoutButton.click(this.onClickedLogout.bind(this));
        this.addButton.click(this.testDataBase.bind(this));

        firebase.auth().onAuthStateChanged(function (user) {
            if(!user){
                profileFragment.navigateToLogin();
            }else {
                profileFragment.profile_name.html(user.uid);
                console.log(user.uid);
                firebase.database().ref('test_data').once('value').then(function (snapshot) {
                    profileFragment.test_label.html(snapshot.val());
                    console.log(snapshot.val());
                });
            }
        });
    },
    onClickedLogout : function () {
        firebase.auth().signOut().then(function() {
            profileFragment.navigateToLogin();
        }).catch(function(error) {
            console.log(error);
        });
    },

    testDataBase : function (){
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('test/' + userId).set({
            username: "xxxxx",
            email: "sewerun777@gmail.com",
            profile_picture : "avatar.jpg"
        });
    },

    navigateToLogin : function () {
        navigation.navigateToPath(  "/view/login/login.html" );
    }

};