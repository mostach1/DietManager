var controller = {

    searchApiKey : "z9HfGMQzfhQBmeD6UvasVWC3Azf0e9lgbaqbz19K",


    onCreate: function() { },

    onDeviceReady: function() {
        /*$.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });*/
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