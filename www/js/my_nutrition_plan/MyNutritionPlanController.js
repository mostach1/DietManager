var controller = {

    productName: null,
    calories: null,
    quantity: null,
    productTable: [{}],
    nextDayButton: null,
    onCreate: function () {
    },

    onDeviceReady: function () {
        var nextDayTable = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        var productTable = [{'name': 'nazwa', 'quantity': 14016, 'calories': 156}];
        var dayController = 0;
        this.nextDayButton = $("#next_day_button");
        this.productName = $("#product_name");
        this.calories = $("#calories");
        this.quantity = $("#quantity");
        this.displayProducts($("#breakfast_products"), productTable);
        this.displayDayName($("#day_name"), nextDayTable[dayController]);
    },

    displayDayName: function (view, dayName) {
        var dayNameTemplate = '<h5 class="center-align" id="day_row"><b>' +
            dayName +
            '</b></h5>';
        view.html(dayNameTemplate);
    },

    displayProducts: function (view, data) {

        var template = '';
        if (data) {
            template = ' <table class="striped">\n' +
                '            <thead>\n' +
                '            <tr>\n' +
                '                <th>Product name</th>\n' +
                '                <th>QTY</th>\n' +
                '                <th>Calories</th>\n' +
                '            </tr>\n' +
                '            </thead>\n' +
                '            <tbody class="product_table">\n';
            for (var i = 0; i < data.length; i++) {
                template += '            <tr>\n' +
                    '                <td>' + data[i].name + '</td>\n' +
                    '                <td>' + data[i].quantity + '</td>\n' +
                    '                <td>387</td>\n' +
                    '            </tr>\n';
            }
            template += '            </tbody>\n' +
                '        </table>';
        }
        else {
            template = '';
        }
        view.html(template);
    }
};
