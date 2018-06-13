<?php  
	require "conn.php";
	if(isset($_POST['user'])){
		$username=$_POST['user'];
		$password=md5($_POST['pass']);
	}else{
		exit('非法操作');
	}


	$result=mysql_query("select * from userphone where phone='$username' and password='$password' ");
	if(mysql_fetch_array($result)){//有值，登陆通过
		echo true;
	}else{
		echo false;
	}

?>