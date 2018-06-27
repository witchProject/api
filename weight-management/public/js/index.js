var container = document.getElementById('chart-area');
var data = {
    categories: ['2018-06-20', '2018-06-21', '2018-06-22', '2018-06-23', '2018-06-24', '2018-06-25', '2018-06-26' ], 
    series: [
        {
            name: '체중',
            data: [58, 57, 56, 54, 54.3, 53, 54]
        }
    ]
};
var options = {
    chart: {width: 700, height: 400}
};

var chart = tui.chart.lineChart(container, data, options);