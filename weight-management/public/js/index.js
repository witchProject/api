var container = document.getElementById('chart-area');
  
$.ajax({
    url: 'http://localhost:3000/api/weights',
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
        console.log(data);
        setGraph(data);
    },
    error: function(e){
        console.log(e);
    },
    complete: function(data) {}
});

var setGraph = function(weights){
    var weight_categories = [];
    var weight_data = [];
    for(var i=0; i<weights.length; i++){
        weight_categories.push(weights[i].register_ymdt);
        weight_data.push(weights[i].weight);
    }

    var data = {
        categories: weight_categories, 
        series: [
            {
                name: '체중',
                data: weight_data
            }
        ]
    };
    var options = {
        chart: {width: 700, height: 400}
    };

    var chart = tui.chart.lineChart(container, data, options);
}