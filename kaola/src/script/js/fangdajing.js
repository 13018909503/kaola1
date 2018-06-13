;(function(){
	var $spic=$('.glass_wrap .spic');//小图
	var $sf=$('.sf');//小放大镜
	var $bpic=$('.glass_wrap .bpic');//大图
	var $wrap=$('.glass_wrap');//外层盒子
	var $picli=$('.list_ul .list_li');//list下面的li
	var $bf_box=$('.bf_box')
	var $bf=$('.bf')//大放大镜
	
	$picli.on('click',function(){//点击小图，大图对应改变
		var $url=$(this).find('img').attr('src');
		console.log($url)
		$spic.find('img').attr('src',$url);
		$bf.find('img').attr('src',$url)
	})

	$spic.hover(function(){//鼠标滑入显示小放大镜和大放大镜
		$bf.css("visibility","visible")
		$sf.css("visibility","visible")

		$sf.css({
			width:$spic.width()*$bf.width()/$bpic.width(),
			height:$spic.height()*$bf.height()/$bpic.height()
		})
		var $scale=$bf.width()/$sf.width()//比例


		$(this).on('mousemove',function(ev){
			var $left=ev.pageX-$wrap.offset().left-$sf.width()/2;
			var $top=ev.pageY-$wrap.offset().top-$sf.height();
			console.log($top)
			if($left<=0){
				$left=0
			}else if($left>=$spic.width()-$sf.width()){
				$left=$spic.width()-$sf.width()
			}
			if($top<=0){
				$top=0
			}else if($top>=$spic.height()-$sf.height()){
				$top=$spic.height()-$sf.height()
			}
			$sf.css({
				left:$left,
				top:$top
			})
			$bpic.css({
				left:-$left*$scale,
				top:-$top*$scale
			})
		})

	},function(){
		$bf.css("visibility","hidden");
		$sf.css("visibility","hidden");
	})


})(jQuery);