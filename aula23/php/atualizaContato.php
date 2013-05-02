<?php

	include("conectar.php");

	$callback = $_REQUEST['callback'];
	$obj = json_decode($_REQUEST['records']);
	$nome = $obj->{'nome'};
	$email = $obj->{'email'};
	$id = $obj->{'id'};

	$query = sprintf("UPDATE Contato SET nome = '%s', email = '%s' WHERE id = %d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email),
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo $callback . '(' . 
		json_encode(array(
			"success" => mysql_errno() == 0
	)) . ');';

?>