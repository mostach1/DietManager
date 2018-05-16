var controller = {

    addProductBtn : null,
    productName: null,
    calories: null,
    quantity: null,
    productTable: null,
    onCreate: function() { },

    onDeviceReady: function() {
        this.addProductBtn = $("#add_selected_product");
        this.addProductBtn.click(this.switchToCreatePlanView);
        this.productName = $("#product_name");
        this.calories = $("#calories");
        this.quantity = $("#quantity");
        this.productTable = [];
        if (navigator.userAgent.indexOf('Android') > -1)
        {
            document.getElementById('obrazek').src = "file:///android_asset/www/img/jajko.png";
        }
        else {
            document.getElementById('obrazek').src = "../../www/img/jajko.png";
        }
    },

    switchToCreatePlanView: function(){
        navigation.navigateToPath("/view/create_nutrition_plan/create_nutrition_plan.html");
    }

};