var controller = {
    navigateButton: null,
    onCreate: function () {
    },

    onDeviceReady: function () {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });


        this.navigateButton = $("#add_new_weight");

        this.navigateButton.click(this.navigateBack.bind(this));


    },
    navigateBack: function () {
        window.location.href = "/view/main/main.html";
    },
};
