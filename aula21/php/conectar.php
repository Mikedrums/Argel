<?php
	$servidor = "localhost";
	$user = "root";
	$senha = "";
	$db = "cursoextjs4";
	$conexao = mysql_connect($servidor, $user, $senha) or die(mysql_error());
	$banco = mysql_select_db($db, $conexao) or die(mysql_error());
?>