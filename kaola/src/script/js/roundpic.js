;(function($) {
    var $banner = $('#banner');
    var $rotation_img = $('#banner .banner_img .rotation_img');
    var $circle_li = $('#banner .circle .circle_li');
    var $left = $('#bn_right');
    var $right = $('#bn_left');
    var num = 0; //当前点击的索引
    var $piclilength = $rotation_img.size();
    var timer = null;
    $circle_li.on('click', function() {
        num = $(this).index();
        tabswitch();
    });

    $right.on('click', function() {
        num++;
        if (num > $piclilength - 1) {
            num = 0;
        }
        tabswitch();
    });


    $left.on('click', function() {
        num--;
        if (num < 0) {
            num = $piclilength - 1;
        }
        tabswitch();
    });

    /*function tabswitch() {
        $circle_li.eq(num).addClass('active').siblings($circle_li).removeClass('active');
        $rotation_img.eq(num).animate({ opacity: 1 }).siblings($rotation_img).animate({ opacity: 0 });
    }*/


    timer = setInterval(function() {
        alert(num)
        $right.click();
    }, 2000);

    $banner.hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(function() {
            $right.click();
        }, 2000);
    });

})(jQuery);