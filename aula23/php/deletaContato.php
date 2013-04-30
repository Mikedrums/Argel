<?php

	include("conectar.php");

	$callback = $_REQUEST['callback'];
	$records = parse_str($_REQUEST['records'], $array);
	$id = $array['id'];

	$query = sprintf("DELETE FROM Contato WHERE id = %d",
		mysql_real_escape_string($id));

	$rs = mysql_query($query);

	echo $callback . '(' . json_encode(array(
			"success" => mysql_errno() == 0
	)) . ');';

?>