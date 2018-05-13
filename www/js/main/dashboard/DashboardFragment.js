var dashboardFragment = {

    navigateToPlanDetailsView1 : null,
    navigateToPlanDetailsView2 : null,
    navigateToPlanDetailsView3 : null,
    navigateToPlanDetailsView4 : null,
    navigateToPlanDetailsView5 : null,
    dietName1 : null,
    dietName2 : null,
    dietName3 : null,
    dietName4 : null,
    dietName5 : null,
    dietDescription1 :null,
    dietDescription2 :null,
    dietDescription3 :null,
    dietDescription4 :null,
    dietDescription5 :null,

    onCreate: function() { },

    onDeviceReady: function() {
        this.navigateToPlanDetailsView1 = $("#plan_details_view_1"),
        this.navigateToPlanDetailsView2 = $("#plan_details_view_2"),
        this.navigateToPlanDetailsView3 = $("#plan_details_view_3"),
        this.navigateToPlanDetailsView4 = $("#plan_details_view_4"),
        this.navigateToPlanDetailsView5 = $("#plan_details_view_5"),
        this.dietName1 =$("#diet_name1"),
        this.dietDescription1 = $("#diet_description1"),
        this.dietName2 = $("#diet_name2"),
        this.dietDescription2 = $("#diet_description2"),
        this.dietName3 = $("#diet_name3"),
        this.dietName4 = $("#diet_name4"),
        this.dietName5 = $("#diet_name5"),
            this.dietDescription3 = $("#diet_description3"),
            this.dietDescription4 = $("#diet_description4"),
            this.dietDescription5 = $("#diet_description5"),
        document.getElementById('diet_link1').src = "../../../../res/dietIMG/glutenFree.jpg";
        document.getElementById('diet_link2').src = "../../../../res/dietIMG/fit.jpg";
        document.getElementById('diet_link3').src = "../../../../res/dietIMG/muscle.jpg";
        document.getElementById('diet_link4').src = "../../../../res/dietIMG/vegan.jpg";
        document.getElementById('diet_link5').src = "../../../../res/dietIMG/vegetarian.jpg";

        this.navigateToPlanDetailsView1.click(this.navigateToFirstPlanDetails.bind(this));
        this.navigateToPlanDetailsView2.click(this.navigateToSecondPlanDetails.bind(this));
        this.navigateToPlanDetailsView3.click(this.navigateToThirdPlanDetails.bind(this));
        this.navigateToPlanDetailsView4.click(this.navigateToFourthPlanDetails.bind(this));
        this.navigateToPlanDetailsView5.click(this.navigateToFifthPlanDetails.bind(this));

        firebase.auth().onAuthStateChanged(function (user) {
            profileFragment.profile_name.html(user.uid);
            console.log(user.uid);
            firebase.database().ref('diet_offers').once('value').then(function(snapshot) {
                var item = snapshot.val();
                profileFragment.test_label.html(snapshot.val());
                dashboardFragment.dietName2.html(item["2"].dietName);
                dashboardFragment.dietDescription2.html(item["2"].dietDescription);
                dashboardFragment.dietName1.html(item["1"].dietName);
                dashboardFragment.dietDescription1.html(item["1"].dietDescritpion);
                dashboardFragment.dietName3.html(item["3"].dietName);
                dashboardFragment.dietDescription3.html(item["3"].dietDescription);
                dashboardFragment.dietName4.html(item["4"].dietName);
                dashboardFragment.dietDescription4.html(item["4"].dietDescription);
                dashboardFragment.dietName5.html(item["5"].dietName);
                dashboardFragment.dietDescription5.html(item["5"].dietDescription);
            });
        });

    },

    navigateToFirstPlanDetails : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "1");
        window.location.href = "/view/plan_details/plan_details.html";
      },
    navigateToSecondPlanDetails : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "2");
        window.location.href = "/view/plan_details/plan_details.html";
    },
    navigateToThirdPlanDetails : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "3");
        window.location.href = "/view/plan_details/plan_details.html";
    },
    navigateToFourthPlanDetails : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "4");
        window.location.href = "/view/plan_details/plan_details.html";
    },
    navigateToFifthPlanDetails : function () {

        localStorage.removeItem("diet_offer_ID");
        localStorage.setItem("diet_offer_ID", "5");
        window.location.href = "/view/plan_details/plan_details.html";
    }

};