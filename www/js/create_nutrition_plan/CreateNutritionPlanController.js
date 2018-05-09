var controller = {

    addBreakfast : null,
    onCreate: function() { },

    onDeviceReady: function() {
        this.addBreakfast = $("#add_breakfast");
        this.addBreakfast.click(this.navigateToAddProduct);
    },

    navigateToAddProduct: function () {
        window.location.href = "/view/add_product/add_product.html";
    }

};
