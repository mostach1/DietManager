var statsFragment = {
    navigateButton: null,
    actual_weight: null,
    onCreate: function () {
    },

    onDeviceReady: function () {
        this.navigateButton = $("#set_weight_button");
        this.navigateButton.click(this.navigateToAddWeight.bind(this));
        this.actual_weight=$('#actual_weight');
        firebase.auth().onAuthStateChanged(function (user) {
            console.log(user.uid);
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref('weight/' + userId);
            ref.once('value').then(function (snapshot) {
                console.log(snapshot.val());
                var chartData = {
                    type: 'line',
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'graph of your weight',
                            data: [],
                            backgroundColor: [],
                            borderColor: [],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                };

                var object = snapshot.val();
                var array = $.map(object, function(value, index) {
                    return [value];
                });
                function compare(a,b) {
                    if (a.date < b.date)
                        return -1;
                    if (a.date > b.date)
                        return 1;
                    return 0;
                }

                array.sort(compare);
                console.log(array);
                for(var i=0;i<array.length;i++) {
                    var day = array[i];
                    chartData.data.labels.push(day.date);
                    chartData.data.datasets[0].data.push(day.weight);
                    chartData.data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.2)');
                    chartData.data.datasets[0].borderColor.push('rgba(255,99,132,1)');
                    statsFragment.actual_weight.html(day.weight);

                }

                var ctx = document.getElementById("myChart").getContext("2d");
                var myChart = new Chart(ctx, chartData);

            });
        });

       /* firebase.auth().onAuthStateChanged(function (user) {

            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref('weight/' + userId);
            ref.once('value').then(function (snapshot) {

                var object1 = snapshot.val();
                var list;
                for(x in object1) {
                    var day = object1[x];
                    console.log(object1[x]);

                       console.log(day.weight);

                }

            });
        });*/

    },

    navigateToAddWeight: function () {
        navigation.navigateToPath("/view/add_weight/addWeight.html");
    }
    ,

    buildChart: function () {

    }
    ,


};
