<?php

	include("conectar.php");

	$callback = $_REQUEST['callback'];
	$obj = json_decode($_REQUEST['records']);
	$nome = $obj->{'nome'};
	$email = $obj->{'email'};

	$query = sprintf("INSERT INTO Contato (nome, email) values ('%s', '%s')",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email));

	$rs = mysql_query($query);

	// header('Content-Type: text/javascript');

	echo $callback . '(' . json_encode(array(
		"success" => mysql_errno() == 0,
		"contatos" => array(
			"id" => mysql_insert_id(),
			"nome" => $nome,
			"email" => $email
		)
	)) . ');';
?>