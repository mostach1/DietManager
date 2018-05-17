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
        //this.addButton.click(this.testDataBase.bind(this));
        $('select').formSelect();
        $(document).ready(function(){

        });
        this.navigateToPlanVege = $("#vegetarianDiv"),
        this.navigateToPlanVegan = $("#veganDiv"),
        this.navigateToPlanDGluten = $("#glutenFreeDiv"),
        this.navigateToPlanVege.click(this.navigateToVegetarian.bind(this));
        this.navigateToPlanVegan.click(this.navigateToVegan.bind(this));
        this.navigateToPlanDGluten.click(this.navigateToGlutenFree.bind(this));


        $( "#mySelectID" ).change(function() {
            var x = $('#mySelectID').val();
            if(x == "1") {
                document.getElementById('vegetarianDiv').style.display = "block";
                document.getElementById('glutenFreeDiv').style.display = "none";
                document.getElementById('veganDiv').style.display = "none";
            }
            else if(x == "2") {
                document.getElementById('veganDiv').style.display = "block";
                document.getElementById('vegetarianDiv').style.display = "none";
                document.getElementById('glutenFreeDiv').style.display = "none";
            }
            else if(x == "3") {
                document.getElementById('glutenFreeDiv').style.display = "block";
                document.getElementById('vegetarianDiv').style.display = "none";
                document.getElementById('veganDiv').style.display = "none";
            }
            else{
                document.getElementById('glutenFreeDiv').style.display = "none";
                document.getElementById('vegetarianDiv').style.display = "none";
                document.getElementById('veganDiv').style.display = "none";
            }


        });

        $(document).ready(function() {
            $("input").change(function() {
                if($(this).is(":checked")) {
                    console.log("Is checked");
                    //cordova.plugins.notification.local.schedule({
                      //  id: 1,
                       // text: 'It is a proper time for eating',
                       // every: 'minute',
                       // data: { key:'value' }
                    //});
                }
                else {
                    console.log("Is Not checked");
                }
            })
        });

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

    navigateToLogin : function () {
        navigation.navigateToPath(  "/view/login/login.html" );
    },
    navigateToVegetarian : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "5");
        navigation.navigateToPath("/view/plan_details/plan_details.html");
    },
    navigateToVegan : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "4");
        navigation.navigateToPath("/view/plan_details/plan_details.html");
    },
    navigateToGlutenFree : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "1");
        navigation.navigateToPath("/view/plan_details/plan_details.html");
    }

};