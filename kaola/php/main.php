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



	//详情页放大镜
	$glass=mysql_query("select * from glass");
	$glassarr=array();
	for($i=0;$i<mysql_num_rows($glass);$i++){
		$glassarr[$i]=mysql_fetch_array($glass,MYSQLI_ASSOC);
	}

	class indexdata{

	};
	$index=new indexdata();
	$index->lunbotu=$bannerarr;
	$index->neirong=$mainarr;
	$index->fangdajing=$glassarr;
	echo json_encode($index);


