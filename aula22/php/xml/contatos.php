<?php

	header("Content-type: text/xml");

	include("../conectar.php");

	switch ($_SERVER['REQUEST_METHOD']) {
		case 'GET':
			listaContatos();
			break;
		
		case 'POST':
			criaContato();
			break;
		
		case 'PUT':
			atualizaContato();
			break;
		
		case 'DELETE':
			deletaContato();
			break;
	}

	function listaContatos() {

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

	}

	function criaContato() {

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

	}

	function atualizaContato() {

		$dom = new DOMDocument();
		$dom->loadXML(file_get_contents('php://input'));

		$contatos = simplexml_import_dom($dom);
		$nome = $contatos->contato->nome;
		$email = $contatos->contato->email;
		$id = $contatos->contato->id;

		$query = sprintf("UPDATE Contato SET nome = '%s', email = '%s' WHERE id = %d",
			mysql_real_escape_string($nome),
			mysql_real_escape_string($email),
			mysql_real_escape_string($id));

		$rs = mysql_query($query);

		$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';

		$xml .= "<success>";
			$xml .= mysql_errno() == 0;
		$xml .= "</success>";

		echo $xml;

	}

	function deletaContato() {
		
		$dom = new DOMDocument();
		$dom->loadXML(file_get_contents('php://input'));

		$contatos = simplexml_import_dom($dom);
		$nome = $contatos->contato->nome;
		$email = $contatos->contato->email;
		$id = $contatos->contato->id;

		$query = sprintf("DELETE FROM Contato WHERE id = %d",
			mysql_real_escape_string($id));

		$rs = mysql_query($query);

		$xml = '<?xml version="1.0" encoding="iso-8859-1" ?>';

		$xml .= "<success>";
			$xml .= mysql_errno() == 0;
		$xml .= "</success>";

		echo $xml;

		}

?>