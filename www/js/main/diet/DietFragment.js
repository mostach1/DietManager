var dietFragment = {

    chooseExistingBtn : null,
    createYourOwnBtn : null,
    obrazek: null,
    onCreate: function() { },

     onDeviceReady: function() {
        this.chooseExistingBtn = $("#choose_existingbtn");
         this.createYourOwnBtn = $("#create_your_ownbtn");
         this.chooseExistingBtn.click(this.switchTab);
         this.createYourOwnBtn.click(this.switchToPlanCreation);
         if (navigator.userAgent.indexOf('Android') > -1)
         {
             document.getElementById('obrazek').src = "file:///android_asset/www/img/sad_emoji.jpg";
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
     }
};