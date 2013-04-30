<?php

	header('Content-type: text/xml');

	include("../conectar.php");

	$dom = new DOMDocument();
	$dom->loadXML(file_get_contents('php://input'));

	$contatos = simplexml_import_dom($dom);
	$nome = $contatos->contato->nome;
	$email = $contatos->contato->email;

	$query = sprintf("INSERT INTO Contato (nome, email) values ('%s', '%s')",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($email));

	$rs = mysql_query($query);

	$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';

	$xml .= "<success>";
		$xml .= mysql_errno() == 0;
	$xml .= "</success>";

	$xml .= "<contatos>";
		$xml .= "<contato>";
			$xml .= "<id>" . mysql_insert_id() . "</id>";
			$xml .= "<nome>" . $nome . "</nome>";
			$xml .= "<email>" . $email . "</email>";
		$xml .= "</contato>";
	$xml .= "</contatos>";

	echo $xml;

?>