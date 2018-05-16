var dietFragment = {

    chooseExistingBtn : null,
    createYourOwnBtn : null,
    showMenuBtn: null,
    obrazek: null,
    onCreate: function() { },

     onDeviceReady: function() {
        this.chooseExistingBtn = $("#choose_existingbtn");
         this.createYourOwnBtn = $("#create_your_ownbtn");
         this.showMenuBtn = $("#show_plan");
         this.chooseExistingBtn.click(this.switchTab);
         this.createYourOwnBtn.click(this.switchToPlanCreation);
         this.showMenuBtn.click(this.switchToMyPlan);
         if (navigator.userAgent.indexOf('Android') > -1)
         {
             document.getElementById('obrazek').src = "file:///android_asset/www/img/sad_emoji.png";
         }
         else {
             document.getElementById('obrazek').src = "../../www/img/sad_emoji.png";
         }
     },

     switchTab: function(){
         var instance = M.Tabs.getInstance($('.tabs'));
         instance.select('test-swipe-1');
     },

     switchToPlanCreation: function(){
         navigation.navigateToPath("/view/create_nutrition_plan/create_nutrition_plan.html");
     },

     switchToMyPlan: function(){
         navigation.navigateToPath("/view/my_nutrition_plan/my_nutrition_plan.html");
     }
};