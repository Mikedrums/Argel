<?php

	include("conectar.php");

	$callback = $_REQUEST['callback'];

	$query = mysql_query("SELECT * FROM Contato") or die(mysql_error());
	$rows = array('contatos' => array());
	while($contato = mysql_fetch_assoc($query)) {
		$rows['contatos'][] = $contato;
	}

	header('Content-Type: text/javascript');

	echo $callback . '(' . json_encode($rows) . ');';

?>