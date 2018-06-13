;(function($){
	//获取元素
	var $banner=$('#banner .banner_img');
	var $roation=$('#banner .rotation_img');
	var $goodwrap=$('#main .goodwrap');
	var $circle=$('#banner .circle');
	var $list=$('.list_img');
	var $spic=$('.spic_img');
	var $bpic=$('.bpic');
	$.ajax({//ajax请求
		url:'../../php/main.php',//获取数据库数据
		dataType:'json'//转成json格式
	}).done(function(carousel){
		var $lunbo=carousel.lunbotu;
		//var $str = $.parseJSON(carousel)；
		//console.log(obj[0].url)
		//console.log($banner.add('img').find('img').eq(0).attr('src',obj[0].url)
		for(var i=0;i<6;i++){//拼接图片
			$roation.eq(i).attr('src',$lunbo[i].url)
		}
		
	})


	//主体内容数据请求
	$.ajax({
		url:'../../php/main.php',
		dataType:'json',
	}).done(function(mainpic){
		var $neirong=mainpic.neirong;
		$.each($neirong,function(index,ele){
			$goodwrap.append(`<div class="detailwrap"><div class="box"></div><a class="detailpic"><img class="proimg" src=${ele.url}><img class="brandimg" src=${ele.url2}><span class="uniontag">${ele.sale}</span></a><div class="proinfo"><h3 class="tit"><a href="#" class="titlin">${ele.title}</a></h3><p class="w-price"><span class="symbol">${ele.price}</span></p><a class="cat-btn">加入购物车</a></div></div>`)
		})
	})


	$.ajax({//ajax请求
		url:'../../php/main.php',//获取数据库数据
		dataType:'json'//转成json格式
	}).done(function(rank){
		var $aglass=rank.fangdajing;
		for(var i=0;i<3;i++){//拼接图片
			$list.eq(i).attr('src',$aglass[i].url2);

		}
	})
		
})(jQuery);