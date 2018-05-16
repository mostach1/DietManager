var controller = {
    navigateButton: null,
    weightInput: null,
    dateInput: null,
    buildChart: null,
    backbutton:null,

    onCreate: function () {
    },

    onDeviceReady: function () {

        this.dateInput = $("#date_input");
        this.weightInput = $("#input_weight");
        this.navigateButton = $("#add_new_weight");
        this.backbutton=$("#back_button");
        this.navigateButton.click(this.navigateBack.bind(this));
        this.backbutton.click(this.onlyBack.bind(this));
    },
    navigateBack: function () {
        var userId = firebase.auth().currentUser.uid;
        var ref = firebase.database().ref('weight/' + userId);
        var newItem = ref.push();
        var data = {
            weight: controller.weightInput.val(),
            date: controller.dateInput.val()
        };
        console.log(data);
        newItem.set(data).then(function (resp) {
            navigation.navigateToPath("/view/main/main.html");
        });
    },
    onlyBack: function(){

      navigation.navigateToPath("/view/main/main.html");
    },

};
