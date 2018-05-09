var dietFragment = {

    chooseExistingBtn : null,
    createYourOwnBtn : null,
    onCreate: function() { },

     onDeviceReady: function() {
        this.chooseExistingBtn = $("#choose_existingbtn");
         this.createYourOwnBtn = $("#create_your_ownbtn");
         this.chooseExistingBtn.click(this.switchTab);
         this.createYourOwnBtn.click(this.switchToPlanCreation);
     },

     switchTab: function(){
         var instance = M.Tabs.getInstance($('.tabs'));
         instance.select('test-swipe-1');
     },

     switchToPlanCreation: function(){
        window.location.href = '/view/create_nutrition_plan/create_nutrition_plan.html';
     }
};