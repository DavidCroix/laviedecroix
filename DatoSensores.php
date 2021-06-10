<?php
header('Content-Type: application/json');
$pdo=new PDO("mysql:dbname=basededatos;host=127.0.0.1","root");
switch((isset($_GET['q']) ?$_GET['q'] : '')){
		// Buscar Último Dato
		case 1:
		    $statement=$pdo->prepare("SELECT humedad,temperatura,humedad2,humedad3 FROM tblsensores ORDER BY id DESC LIMIT 0,1");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$json=json_encode($results);
			echo $json;
		break; 
		// Buscar Todos los datos
		default:
			
			$statement=$pdo->prepare("SELECT humedad,temperatura,humedad2,humedad3 FROM tblsensores ORDER BY id ASC");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$json=json_encode($results);
			echo $json;
		break;
}
?>
