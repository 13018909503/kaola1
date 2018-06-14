<?php  
	
	$conn=mysql_connect('localhost','root','');

	mysql_select_db('kaola');

	mysql_query('SET NAMES UTF8');

	//banner数据
	$banner=mysql_query("select * from banner");
	$bannerarr=array();
	for($i=0;$i<mysql_num_rows($banner);$i++){
		$bannerarr[$i]=mysql_fetch_array($banner,MYSQLI_ASSOC);
	}
	




	//主体内容数据
	$main=mysql_query("select * from main");
	$mainarr=array();
	for($i=0;$i<mysql_num_rows($main);$i++){
		$mainarr[$i]=mysql_fetch_array($main,MYSQLI_ASSOC);
	}




	class indexdata{

	};
	$index=new indexdata();
	$index->lunbotu=$bannerarr;
	$index->neirong=$mainarr;
	echo json_encode($index);


