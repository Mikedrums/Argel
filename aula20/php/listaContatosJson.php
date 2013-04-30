<?php

	include("conectar.php");
	$query = mysql_query("SELECT * FROM Contato") or die(mysql_error());
	$rows = array();
	while($contato = mysql_fetch_assoc($query)) {
		$rows[] = $contato;
	}

	echo json_encode($rows);

?>