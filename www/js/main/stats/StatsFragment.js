var statsFragment = {
    navigateButton: null,
    onCreate: function () {
    },

    onDeviceReady: function () {
        this.navigateButton = $("#set_weight_button");
        this.navigateButton.click(this.navigateToAddWeight.bind(this));

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
                            label: '# of Votes',
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
                for (x in object) {
                    var day = object[x];
                    chartData.data.labels.push(day.date);
                    chartData.data.datasets[0].data.push(day.weight);
                    chartData.data.datasets[0].backgroundColor.push('rgba(255, 99, 132, 0.2)');
                    chartData.data.datasets[0].borderColor.push('rgba(255, 99, 132, 0.2)');
                }

                var ctx = document.getElementById("myChart").getContext("2d");
                var myChart = new Chart(ctx, chartData);

            });
        });

    },
    navigateToAddWeight: function () {
        navigation.navigateToPath("/view/add_weight/addWeight.html");
    }
    ,

    buildChart: function () {

    }
    ,


};
