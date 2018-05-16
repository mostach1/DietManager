var controller = {

    productCard: null,
    onCreate: function() { },

    onDeviceReady: function() {
        this.productCard = $("#product_card");
        this.productCard.click(this.navigateToProductDetail);
        if (navigator.userAgent.indexOf('Android') > -1)
        {
            document.getElementById('obrazek').src = "file:///android_asset/www/img/jajko.png";
        }
        else {
            document.getElementById('obrazek').src = "../../www/img/jajko.png";
        }
    },

    navigateToProductDetail: function () {
        navigation.navigateToPath("/view/product_detail/product_detail.html");
    }

};