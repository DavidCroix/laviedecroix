<HTML>
<BODY>

<meta charset="utf-8"> 

<?php
require_once("RandomClass.php");

//Creamos un objeto de la clase randomTable
$rand = new RandomTable();
//insertamos un valor aleatorio
$rand->insertRandom();
//obtenemos toda la información de la tabla random
$rawdata = $rand->getAllInfo();

//nos creamos dos arrays para almacenar el tiempo y el valor numérico
$valoresArray;
$timeArray;
//en un bucle for obtenemos en cada iteración el valor númerico y 
//el TIMESTAMP del tiempo y lo almacenamos en los arrays 
for($i = 0 ;$i<count($rawdata);$i++){
    $valoresArray[$i]= $rawdata[$i][1];
    //OBTENEMOS EL TIMESTAMP
    $time= $rawdata[$i][2];
    $date = new DateTime($time);
    //ALMACENAMOS EL TIMESTAMP EN EL ARRAY
    $timeArray[$i] = $date->getTimestamp()*1000;
}

?>
<div id="contenedor"></div>

<script src="https://code.jquery.com/jquery.js"></script>
    <!-- Importo el archivo Javascript de Highcharts directamente desde su servidor -->
<script src="http://code.highcharts.com/stock/highstock.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script>

chartCPU = new Highcharts.StockChart({
    chart: {
        renderTo: 'contenedor'
        //defaultSeriesType: 'spline'

    },
    rangeSelector : {
        enabled: false
    },
    title: {
        text: 'Gráfica'
    },
    xAxis: {
        type: 'datetime'
        //tickPixelInterval: 150,
        //maxZoom: 20 * 1000
    },
    yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        title: {
            text: 'Valores',
            margin: 10
        }
    },
    series: [{
        name: 'valor',
        data: (function() {
                // generate an array of random data
                var data = [];
                <?php
                    for($i = 0 ;$i<count($rawdata);$i++){
                ?>
                data.push([<?php echo $timeArray[$i];?>,<?php echo $valoresArray[$i];?>]);
                <?php } ?>
                return data;
            })()
    }],
    credits: {
            enabled: false
    }
});

</script>   
<script>
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
        backgroundColor: '#4CAF50',
        type: 'column'
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


</BODY>

</html>