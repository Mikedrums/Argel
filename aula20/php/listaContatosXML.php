<?php

	header('Content-type: text/xml');

	include("conectar.php");
	$query = mysql_query("SELECT * FROM Contato") or die(mysql_error());

	$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';
	$xml .= "<contatos>";

	$rows = array();
	while($contato = mysql_fetch_assoc($query)) {
		$xml .= "<contato>";
		$xml .= "<id>" . $contato['id'] . "</id>";
		$xml .= "<nome>" . $contato['nome'] . "</nome>";
		$xml .= "<email>" . $contato['email'] . "</email>";
		$xml .= "</contato>";
	}

	$xml .= "</contatos>";

	echo $xml;

?>