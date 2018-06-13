<?php  
	
	$conn=mysql_connect('localhost','root','');

	mysql_select_db('kaola');
	mysql_query('SET NAMES UTF8');

	$result=mysql_query("select * from banner");

	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
		$arr[$i]=mysql_fetch_array($result,MYSQLI_ASSOC);
	}

	echo json_encode($arr);
?>