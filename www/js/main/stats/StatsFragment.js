var statsFragment = {
    navigateButton: null,
    onCreate: function () {
    },

    onDeviceReady: function () {
        this.navigateButton = $("#set_weight_button");

        this.navigateButton.click(this.navigateToAddWeight.bind(this));

    },
    navigateToAddWeight: function () {
        window.location.href = "/view/add_weight/addWeight.html";
    },
};
