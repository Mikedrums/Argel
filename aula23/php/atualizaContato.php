<?php

	include("conectar.php");

	$callback = $_REQUEST['callback'];
	$nome = $_REQUEST['contatos->nome'];
	$email = $_REQUEST['contatos->email'];
	$records = parse_str($_REQUEST['records'], $array);
	$id = $array['id'];


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