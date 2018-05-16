var controller = {

    addBreakfast: null,
    productName: null,
    calories: null,
    quantity: null,
    productTable: [{}],
    addProductBtn: null,
    nextDayButton: null,
    dayController: 0,
    nextDayTable: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'],
    planData: {
        "dietDescription": "dupadupaczycostam",
        "dietName": "dietName",
        "link": "link",
        "menu": {
            "mondayMenu": {
                "breakfast": [{'name': 'nazwapon', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'kutas', 'quantity': 123, 'calories': 156}],
                "lunch": [{'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'nazwa', 'quantity': 14016, 'calories': 156}]
            },

            "tuesdayMenu": {
                "breakfast": [{'name': 'wtorek', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'wtorek', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'wtorek', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'wtorek', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'wtorek', 'quantity': 14016, 'calories': 156}]
            },

            "wednesdayMenu": {
                "breakfast": [{'name': 'sroda', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'sroda', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'sroda', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'sroda', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'sroda', 'quantity': 14016, 'calories': 156}]
            },

            "thursdayMenu": {
                "breakfast": [{'name': 'czwartek', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'czwartek', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'czwartek', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'czwartek', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'czwartek', 'quantity': 14016, 'calories': 156}]
            },

            "fridayMenu": {
                "breakfast": [{'name': 'piatek', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'piatek', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'piatek', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'piatek', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'piatek', 'quantity': 14016, 'calories': 156}]
            },

            "saturdayMenu": {
                "breakfast": [{'name': 'sobota', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'sobota', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'sobota', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'sobota', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'sobota', 'quantity': 14016, 'calories': 156}]
            },

            "sundayMenu": {
                "breakfast": [{'name': 'nazwanied', 'quantity': 14016, 'calories': 156}, {'name': 'nazwa', 'quantity': 14016, 'calories': 156}],
                "dinner": [{'name': 'nazwanied', 'quantity': 14016, 'calories': 156}],
                "lunch": [{'name': 'nazwanied', 'quantity': 14016, 'calories': 156}],
                "snack1": [{'name': 'nazwanied', 'quantity': 14016, 'calories': 156}],
                "snack2": [{'name': 'nazwanied', 'quantity': 14016, 'calories': 156}]
            }
        }
    },
    onCreate: function () {
    },

    onDeviceReady: function () {
        var productTable = [{'name': 'nazwa', 'quantity': 14016, 'calories': 156}];
        this.nextDayButton = $("#bottom_button");
        this.addProductBtn = $("#add_selected_product");
        this.addBreakfast = $("#add_breakfast");
        this.productName = $("#product_name");
        this.calories = $("#calories");
        this.quantity = $("#quantity");
        this.addBreakfast.click(this.navigateToAddProduct);
        controller.displayDay(controller.planData.menu[Object.keys(controller.planData.menu)[controller.dayController]], controller.nextDayTable[controller.dayController]);
        controller.displayButtonName("NEXT DAY");
        this.displayDayName(this.nextDayTable[this.dayController]);
        this.nextDayButton.click(function () {
            controller.dayController++;
            if (controller.dayController < 6) {
                controller.displayDay(controller.planData.menu[Object.keys(controller.planData.menu)[controller.dayController]], controller.nextDayTable[controller.dayController]);
            }
            else if(controller.dayController == 6){
                controller.displayDay(controller.planData.menu[Object.keys(controller.planData.menu)[controller.dayController]], controller.nextDayTable[controller.dayController]);
                controller.displayButtonName("CREATE NUTRITION PLAN");
            }
            else {
                navigation.navigateToPath("/view/main/main.html");
            }

        })
    },

    displayButtonName: function(name){
        var view = $("#bottom_button");
        var buttonNameTemplate = '    <p class="center-align"><a class="waves-effect red darken-1 btn" id="next_day_button">' +
            name +
        '</a></p>\n';
        view.html(buttonNameTemplate);
    },

    displayDay: function (data, dayName) {
        this.displayDayName(dayName);
        this.displayProducts($("#breakfast_products"), data.breakfast);
        this.displayProducts($("#second_breakfast_products"), data.dinner);
        this.displayProducts($("#lunch_products"), data.lunch);
        this.displayProducts($("#dinner_products"), data.snack1);
        this.displayProducts($("#supper_products"), data.snack2);
    },

    displayDayName: function (dayName) {
        var view = $("#day_name");
        var dayNameTemplate = '<h5 class="center-align" id="day_row"><b>' +
            dayName +
            '</b></h5>';
        view.html(dayNameTemplate);
    },

    navigateToAddProduct: function (dayNumber) {
        navigation.navigateToPath("/view/add_product/add_product.html");
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
