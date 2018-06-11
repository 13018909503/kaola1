;(function($){
	//获取元素
	var $banner=$('#banner .banner_img .rotation_img');
	var $img=$('#banner .rotation_img');
	var $goodwrap=$('#main .goodwrap');
	$.ajax({//ajax请求
		url:'../../php/main.php',//获取数据库数据
		//dataType:'json'//转成json格式
	}).done(function(carousel){
		var $lunbo=carousel.lunbotu;
		//var $str = $.parseJSON(carousel)；
		console.log($lunbo)
		//console.log(obj[0].url)
		//console.log($banner.add('img').find('img').eq(0).attr('src',obj[0].url)
		//$img.eq(0).attr('src',obj[0].url)；

		$.each($lunbo,function(index,ele){//遍历数据库中的所有数据
			$pic="<img src="+ele.url+">";//拼接图片
			$img.html($pic);
		})
	})

	$.ajax({
		url:'../../php/main.php',
		dataType:'json',
	}).done(function(mainpic){
		var $neirong=mainpic.neirong;
		$.each($neirong,function(index,ele){
			$goodwrap.append(`<div class="detailwrap"><a class="detailpic"><img class="proimg" src=${ele.url}><img class="brandimg" src=${ele.url2}><span class="uniontag">${ele.sale}</span></a><div class="proinfo"><h3 class="tit"><a href="#" class="titlin">${ele.title}</a></h3><p class="w-price"><span class="symbol">${ele.price}</span></p><a class="cat-btn">加入购物车</a></div></div>`)
		})
	})
})(jQuery);