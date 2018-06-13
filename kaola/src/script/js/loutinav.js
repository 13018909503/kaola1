(function() {
    var $louti = $('#loutinav'); //楼梯
    var $louceng = $('#main .main_wrap .goodwrap'); //楼层
    $(window).on('scroll', function() {
        var $scrolltop = $(this).scrollTop();//滚动的距离
        if ($scrolltop >= 800) {
            $louti.show();
        } else {
            $louti.hide();
        }

        //拖动滚动条，楼梯和楼层进行匹配。
        $louceng.each(function(index,element){
        	var $top=$(this).offset().top+200;
        	if($top>$scrolltop){//滚动条的top值小于楼层的top值，给楼层对应的楼梯添加active
        		$('#loutinav li').removeClass('active');//移出所有楼梯上面的类。
        		 $('#loutinav li').eq($(this).index('.main_wrap .goodwrap')).addClass('active');
        		 return false;
        	}
        });

    });

    //点击对应的楼梯，将楼层的top赋值给滚动条
    $('#loutinav li').not('.last').on('click', function() {
        $(this).addClass('activ').siblings('#loutinav li').removeClass('activ');
        var $top = $louceng.eq($(this).index('#loutinav li')).offset().top;
        $('html,body').animate({
            scrollTop: $top
        })
    });

    //3.回到顶部
    $('.last').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    });

})();