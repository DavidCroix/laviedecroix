
			  google.charts.load('current', {'packages':['gauge']});
			  google.charts.setOnLoadCallback(drawChart);
			  google.charts.setOnLoadCallback(drawChart2);
			  google.charts.setOnLoadCallback(drawChart3);
			  google.charts.setOnLoadCallback(drawChart4);
			  function drawChart() {
				var data = google.visualization.arrayToDataTable([
				  ['Label', 'Value'],
				  ['Humedad', 98]
				  
				  
				 
				]);
				var options = {
					
				  width: 100, height:100,
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
				  ['Humedad', 95]
				  
				  
				 
				]);
				var options = {
					
				  width: 100, height:100,
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
			  function drawChart3() {
				var data = google.visualization.arrayToDataTable([
				  ['Label', 'Value'],
				  ['Humedad', 96]
				  
				  
				 
				]);
				var options = {
					
				  width: 100, height:100,
				  redFrom: 90, redTo: 100,
				  yellowFrom:75, yellowTo: 90,
				  minorTicks: 5
				};
				var chart = new google.visualization.Gauge(document.getElementById('Medidores3'));
				chart.draw(data, options);
				 setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
				
			  }
			  function termometro() {
				var data = google.visualization.arrayToDataTable([
				  ['Label', 'Value'],
				  ['Humedad', 95]
				  
				  
				 
				]);
				var options = {
					
				  width: 100, height:100,
				  redFrom: 90, redTo: 100,
				  yellowFrom:75, yellowTo: 90,
				  minorTicks: 5
				};
				var chart = new google.visualization.Gauge(document.getElementById('Medidores2'));
				chart.draw(data, options);
				setInterval(function() {
					var JSON=$.ajax({
						url:"http://localhost/Example/sensores/DatoSensores.php?q=1",
						dataType: 'json',
						async: false}).responseText;
					var Respuesta=jQuery.parseJSON(JSON);
					
				  data.setValue(0, 1,Respuesta[0].humedad);
				 ;
				  chart.draw(data, options);
				}, 1300);
				
			  }
			  function drawChart4() {
				var data = google.visualization.arrayToDataTable([
				  ['Label', 'Value'],
				  ['Temperatura', 96]
				  
				  
				 
				]);
				var options = {
					
				  width: 100, height:100,
				  redFrom: 90, redTo: 100,
				  yellowFrom:75, yellowTo: 90,
				  minorTicks: 5
				};
				var chart = new google.visualization.Gauge(document.getElementById('Medidores4'));
				chart.draw(data, options);
				 setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
				
			  }
			