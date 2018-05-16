var controller = {

    searchApiKey : "z9HfGMQzfhQBmeD6UvasVWC3Azf0e9lgbaqbz19K",

            productCard: null,
    onCreate: function() { },

    onDeviceReady: function() {
        this.productCard = $("#product_card");
        this.productCard.click(this.navigateToProductDetail);
        if (navigator.userAgent.indexOf('Android') > -1)
        {
            document.getElementById('obrazek').src = "file:///android_asset/www/img/jajko.png";
            document.getElementById('search_icon').src = "file:///android_asset/www/img/search.png";
        }
        else {
            document.getElementById('obrazek').src = "../../www/img/jajko.png";
            document.getElementById('search_icon').src = "../../www/img/search.png";
        }
    /*$.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });*/
    },
        navigateToProductDetail: function () {
            navigation.navigateToPath("/view/product_detail/product_detail.html");
        },

    requestSearchProducts : function ( queryString ){
        controller.showLoader();
        $.getJSON( "https://api.nal.usda.gov/ndb/search/?format=json&q="+queryString+"&sort=n&max=25&offset=0&api_key=" + controller.searchApiKey, function(data) {
            controller.hideLoader();
            if(data.list){
                controller.displayProductsList(data.list.item);
            }else{
                controller.displayProductsList([]);
            }
        }).fail(function() {
            controller.hideLoader();
            console.log( "requestSearchProducts error" );
        });
    },

    displayProductsList : function ( data ){

    },

    navigateToMain: function () {
        window.location.href = "/view/main/main.html";
    },

    showLoader: function () {
        $('.preloader-background').fadeIn();
    },

    hideLoader: function () {
        $('.preloader-background').fadeOut('slow');
    }

};