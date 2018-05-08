
// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBVVhULg5Edeujg3aB5ldA7JJhS6upUbCk",
    authDomain: "dietmanager-4472f.firebaseapp.com",
    databaseURL: "https://dietmanager-4472f.firebaseio.com",
    projectId: "dietmanager-4472f",
    storageBucket: "dietmanager-4472f.appspot.com",
    messagingSenderId: "788592610510"
});

controller.onCreate();

document.addEventListener('deviceready', function(){
    controller.onDeviceReady();
    $("div[data-fragment]").get().forEach(item => {
        var fragmentName  = item.getAttribute("data-fragment");
        var fragmentView  = item.getAttribute("data-view");
        var fragment = fragments[fragmentName];
        fragment.onCreate();

        var fragmentPath = document.location.origin + fragmentView;
        if (navigator.userAgent.indexOf('Android') > -1) {
            fragmentPath = 'file:///android_asset/www' + fragmentView;
        }

        if(fragmentName){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4) {
                    if (xhttp.status == 200) {
                        item.innerHTML = this.responseText;
                        fragment.onDeviceReady();
                    } else {
                        item.innerHTML = "Page not found.";
                    }
                    item.removeAttribute("provider-fragment");
                }
            }

            xhttp.open("GET", fragmentPath, true);
            xhttp.send();
        }

    });
}, false);


var navigation = {

    navigateToPath : function (path) {
        if (navigator.userAgent.indexOf('Android') > -1) {
            window.open('file:///android_asset/www' + path)
        } else {
            window.location.href = path;
        }
    }

}