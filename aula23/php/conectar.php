<?php
	$servidor = "dbmy0014.whservidor.com";
	$user = "monthal_1";
	$senha = "sundae69";
	$db = "monthal_1";
	$conexao = mysql_connect($servidor, $user, $senha) or die(mysql_error());
	$banco = mysql_select_db($db, $conexao) or die(mysql_error());
?>