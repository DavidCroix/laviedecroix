google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Humedad', 98]
    
    
   
  ]);
  var options = {
      
    width: 300, height:300,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };
  var chart = new google.visualization.Gauge(document.getElementById('Medidores'));
  chart.draw(data, options);
  setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
  
}
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temperatura', 95]
    
    
   
  ]);
  var options = {
      
    width: 300, height:300,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5
  };
  var chart = new google.visualization.Gauge(document.getElementById('Medidores2'));
  chart.draw(data, options);
  setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
}