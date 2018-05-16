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

        var x = $('#mySelectID').val();
        var e = document.getElementById("mySelectID");
        var val1 = e.options[e.selectedIndex].value;
        console.log(val1);
        console.log("eloelo");
        console.log(x);
        console.log("eloelo2");

        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('test/' + userId).once('value').then(function(snapshot) {
                var item = snapshot.val();
                profileFragment.profile_name.html(item.email);
                console.log(snapshot.val());
            });
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