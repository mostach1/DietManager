var controller = {

    addProductBtn : null,
    onCreate: function() { },

    onDeviceReady: function() {
        this.addProductBtn = $("#add_selected_product")
        this.addProductBtn.click(this.switchToCreatePlanView);
    },

    switchToCreatePlanView: function(){
        window.location.href = '/view/create_nutrition_plan/create_nutrition_plan.html';
    }
};