var controller = {
    planID: null,
    planName: null,
    plan_link: null,
    mondayBreakfast : null,
    mondaySnack1 : null,
    mondayLunch : null,
    mondaySnack2 : null,
    mondayDinner : null,
    tuesdayBreakfast : null,
    tuesdaySnack1 : null,
    tuesdayLunch : null,
    tuesdaySnack2 : null,
    tuesdayDinner : null,
    wednesdayBreakfast : null,
    wednesdaySnack1 : null,
    wednesdayLunch : null,
    wednesdaySnack2 : null,
    wednesdayDinner : null,
    thursdayBreakfast : null,
    thursdaySnack1 : null,
    thursdayLunch : null,
    thursdaySnack2 : null,
    thursdayDinner : null,
    fridayBreakfast : null,
    fridaySnack1 : null,
    fridayLunch : null,
    fridaySnack2 : null,
    fridayDinner : null,
    saturdayBreakfast : null,
    saturdaySnack1 : null,
    saturdayLunch : null,
    saturdaySnack2 : null,
    saturdayDinner : null,
    sundayBreakfast : null,
    sundaySnack1 : null,
    sundayLunch : null,
    sundaySnack2 : null,
    sundayDinner : null,

    onCreate: function() { },

    onDeviceReady: function() {
        this.planID = $("#plan_id");
        this.planName = $("#plan_name");
        this.plan_link = $("#plan_link");
        this.mondayBreakfast = $("#monday_breakfast");
        this.mondaySnack1 = $("#monday_snack1");
        this.mondayLunch = $("#monday_lunch");
        this.mondaySnack2 = $("#monday_snack2");
        this.mondayDinner = $("#monday_dinner");
        this.tuesdayBreakfast = $("#tuesday_breakfast");
        this.tuesdaySnack1 = $("#tuesday_snack1");
        this.tuesdayLunch = $("#tuesday_lunch");
        this.tuesdaySnack2 = $("#tuesday_snack2");
        this.tuesdayDinner = $("#tuesday_dinner");
        this.wednesdayBreakfast = $("#wednesday_breakfast");
        this.wednesdaySnack1 = $("#wednesday_snack1");
        this.wednesdayLunch = $("#wednesday_lunch");
        this.wednesdaySnack2 = $("#wednesday_snack2");
        this.wednesdayDinner = $("#wednesday_dinner");
        this.thursdayBreakfast = $("#thursday_breakfast");
        this.thursdaySnack1 = $("#thursday_snack1");
        this.thursdayLunch = $("#thursday_lunch");
        this.thursdaySnack2 = $("#thursday_snack2");
        this.thursdayDinner = $("#thursday_dinner");
        this.fridayBreakfast = $("#friday_breakfast");
        this.fridaySnack1 = $("#friday_snack1");
        this.fridayLunch = $("#friday_lunch");
        this.fridaySnack2 = $("#friday_snack2");
        this.fridayDinner = $("#friday_dinner");
        this.saturdayBreakfast = $("#saturday_breakfast");
        this.saturdaySnack1 = $("#saturday_snack1");
        this.saturdayLunch = $("#saturday_lunch");
        this.saturdaySnack2 = $("#saturday_snack2");
        this.saturdayDinner = $("#saturday_dinner");
        this.sundayBreakfast = $("#sunday_breakfast");
        this.sundaySnack1 = $("#sunday_snack1");
        this.sundayLunch = $("#sunday_lunch");
        this.sundaySnack2 = $("#sunday_snack2");
        this.sundayDinner = $("#sunday_dinner");
    }
};