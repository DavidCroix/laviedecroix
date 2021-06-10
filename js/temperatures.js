//data
var data = [
    {
        day: 'Sunday',
        temperature: {
            temperature: 27
        }
    },
    {
        day: 'Monday',
        temperature: {
            temperature: 26
        }
    },
    {
        day: 'Tuesday',
        temperature: {
            temperature: 25
        }
    },
    {
        day: 'Wednesday',
        temperature: {
            temperature: 27
        }
    },
    {
        day: 'Thursday',
        temperature: {
            temperature: 28
        }
    },
    {
        
        day: 'Friday',
        temperature: {
            temperature: 26
        }
    },
    {
        
        day: 'Saturday',
        temperature: {
            temperature: 26
        }
    }

]


days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
highTemps = [27, 26, 25, 27, 28, 26, 26];



//init
function init() {
    console.log('initializing page...');
    showChart1();
    showChart();
}

//show chart
function showChart1(data) {
    console.log('Show chart. . .');
    //highchart test
    Highcharts.chart('temperatures', {
    chart: {
        type: 'spline',
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
        max: 21,
        title: {
            text: 'Centigrados',
            enabled: true,
            style: {
                'font-size': '8pt',
                color: '#FFB74D'
            }
        }
    },
    legend:{
        enabled: true
    },
    series: [
        {
            name: 'Temperature',
            animation: false,
            color: '#FFB74D',
            data: highTemps
        }
    ]
}); 

}
