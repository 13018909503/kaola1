;(function(){
	var $userphonelock = false;
    var $passwordlock = false;
    var $repasswordlock = false;
    var $emaillock = false;
    var $usephone=$('.use_phone')

    //判断电话号码
	$('.input_phone').on('blur', function() {
        var $that = $(this);
        var reg1 = /^1[3|5|7|8]\d{9}$/;//电话号码为1开头的11位数字
        var $username = $(this).val();
        if ($username != '') {
            if (reg1.test($username)) { //通过的
                //将用户名传给后端进行匹配用户名是否存在
                $.ajax({
                    type: 'post',
                    url: '../../php/reg.php',
                    async: true, //异步
                    //dataType:,//数据类型
                    data: {
                        repeatphone: $username
                    }
                }).done(function(d) { //成功--success  后端返回的结果
                    if (!d) { //没有重复
                        $usephone.css('color', 'green').html('√');
                        $userphonelock = true;
                    } else { //有重复
                        $usephone.css('color', 'red').html('该用户名已存在');
                        $userphonelock = false;
                    }
                });

            } else { //不通过
                $usephone.css('color', 'red').html('格式有误');
                $userphonelock = false;
            }

        } else { //不通过
            $usephone.css('color', 'red').html('用户名不能为空');
            $userphonelock = false;
        }
    });

    //密码验证
    $('.input_pass').on('blur', function() {
        //密码：非中文
        var reg = /.{6,}/;
        var $password = $(this).val();
        if ($password != '') {
            if (reg.test($password)) { //通过的
                $('.use_password').css('color', 'green').html('√');
                $passwordlock = true;
            } else { //不通过
                $('.use_password').css('color', 'red').html('密码格式有误');
                $passwordlock = false;
            }

        } else { //不通过
            $('.use_password').css('color', 'red').html('密码不能为空');
            $passwordlock = false;
        }
    });

    //重复密码
    $('.input_repass').on('blur', function() {
        var $repass = $(this).val();
        if ($repass != '') {
            if ($passwordlock) {//密码重复验证需要密码格式正确。
                if ($repass == $('.input_pass').val()) {
                    $('.use_repass').css('color', 'green').html('√');
                    $repasswordlock = true;
                } else {
                    $('.use_repass').css('color', 'red').html('密码匹配错误');
                    $repasswordlock = false;
                }
            } else { //不通过
                $('.use_repass').css('color', 'red').html('密码格式错误');
                $repasswordlock = false;
            }
        } else {
            $('.use_repass').css('color', 'red').html('密码重复不能为空');
            $repasswordlock = false;
        }

    });

    $('form').on('submit', function() {
        if ($('.input_phone').val() == '') {
            $('p').eq(0).css('color', 'red').html('用户名不能为空');
            $('#username').focus();
            return false;
        }
        if ($('.input_pass').val() == '') {
            $('p').eq(1).css('color', 'red').html('密码不能为空');
            return false;
        }
        if ($('.input_pass').val() != $('.input_repass').val()) {
            $('p').eq(2).css('color', 'red').html('密码重复不能为空');
            return false;
        }
        //所有的表单通过验证才有效果
        if (!$usernamelock || !$passwordlock || !$repasswordlock || !$emaillock) { //如果namelock为false，阻止跳转。
            return false;
        } else {

        }
    });
})(jQuery);