//data
var data = [
    {
        day: 'Sunday',
        Humidity: {
            Lettuce: 80,
            Spinach: 60,
            Chard: 65
        }
    },
    {
        day: 'Monday',
        Humidity: {
            Lettuce: 83,
            Spinach: 63,
            Chard: 68
        }
    },
    {
        day: 'Tuesday',
        Humidity: {
            Lettuce: 79,
            Spinach: 58,
            Chard: 68
        }
    },
    {
        day: 'Wednesday',
        Humidity: {
            Lettuce: 82,
            Spinach: 63,
            Chard: 67
        }
    },
    {
        day: 'Thursday',
        Humidity: {
            Lettuce: 80,
            Spinach: 60,
            Chard: 65
        }
    },
    {
        
        day: 'Friday',
        Humidity: {
            Lettuce: 82,
            Spinach: 60,
            Chard: 65
        }
    },
    {
        
        day: 'Saturday',
        Humidity: {
            Lettuce: 81,
            Spinach: 58,
            Chard: 66
        }
    }

]


days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
Lettuce = [80, 83, 79, 82, 80, 82, 81];
Spinach = [60, 63, 58, 63, 60, 60, 58];
Chard = [65, 68, 68, 67, 65, 65, 66];





//show chart
function showChart(data) {
    console.log('Show chart. . .');
    //highchart test
    Highcharts.chart('humidities', {
    chart: {
        type: 'column',
        backgroundColor:'#E0F2F1',
    },
    title: {
        enabled: true,
        text: ' ',
        style: {
            'font-size' : '12pt',
            color: '#555'
        }
    },
    xAxis: {
        categories: days
    },
    yAxis:{
        min: 0, 
        max: 90,
        title: {
            text: 'Percentage',
            enabled: true,
            style: {
                'font-size': '8pt',
                color: '#777'
            }
        }
    },
    legend:{
        enabled: true
    },
    series: [
        {
            name: 'Lettuce',
            animation: false,
            color: '#90CAF9',
            data: Lettuce
        },
        {
            name: 'Spinach',
            animation: false,
            color: '#2196F3',
            data: Spinach
        },
        {
            name: 'Chard',
            animation: false,
            color: '#82B1FF',
            data: Chard
        }
    ]
}); 

}
