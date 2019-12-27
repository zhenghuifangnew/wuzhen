window.onload = function(){
//头部
    (function(){
        var $anvils= $('.nav ul li');
        var $asHow = $('.nav ul li ul');
        for(var i= 0;i<$anvils.length-1;i++){
            $anvils[i].onmouseenter=function(){
                var index = this.getAttribute('index');//获取元素的自定义属性
                $asHow[index].style.display = "block";
            }
            $anvils[i].onmouseleave=function(){
                var index = this.getAttribute('index');//获取元素的自定义属性
                $asHow[index].style.display = "none";
            }
        }
        //返回顶部+头部菜单栏缓动
    
        var $gotop = $('.gotop')
        window.onscroll = function (){
            var scrollT = document.documentElement.scrollTop|| document.body.scrollTop;// 滚动条高度
            var topheight = document.querySelector('.header');
            var zhusua = document.querySelector('.zhusu-a');
            var headertop = document.querySelector('.header-top');
            var logo = document.querySelector('.logo');
            var icon1 = document.querySelector('.icon1');
            var icon2 = document.querySelector('.icon2');
            if ( scrollT>900) {//滚动条高度>1000
                $gotop[0].style ="display:block";
                move(topheight,70);
                headertop.style ="background: rgba(0, 0, 0, 1);";
                zhusua.style ="display:block";
                headertop.style ="display:none";
                icon1.style ="display:none";
                icon2.style ="display:block";

            }else{
                $gotop[0].style ="display:none";
                move(topheight,119);
                headertop.style ="background: rgba(0, 0, 0, 0.75);";
                zhusua.style ="display:none";
                headertop.style ="display:block";
                icon1.style ="display:block";
                icon2.style ="display:none";
            }
            //回到顶部
            $gotop[0].onclick=function(){
                var timer =null;
                clearInterval(timer)
                if(scrollT>0){
                    timer = setInterval(function(){
                        var speed = -20;
                        speed = speed>0? Math.ceil(speed):Math.floor(speed);
                        scrollT=scrollT+ speed;
                        document.documentElement.scrollTop=scrollT;
                        if(scrollT<=0){
                            clearInterval(timer)
                        }
                    },10);
                }
            }
        }
    })();

    function move(dom,target){
        clearInterval(dom.timer);
        dom.timer = setInterval(function (){
            var speed = (target - dom.offsetHeight) / 10;//持续变好的速度
            // 浮点数计算，造成数据丢失，无法到达目的地  => 取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 剩余运动量 <= 1
            if (Math.abs(dom.offsetHeight - target) <= 1) {
                clearInterval(dom.timer);
                dom.style.height = target + 'px';//手动设置终点
            } else{
                dom.style.height = dom.offsetHeight + speed + 'px';//每次的运动
            }
        },10);
    }
//点击放大镜显示蒙板层
(function(){
        var $fangdajing = $('.fangdajing1');
        var $search = $(' .search .search-window');
        var $close = $('.close');
        $fangdajing.on('click',function(){
            $search[0].style.display = 'block';
            return false;
        });
        $close.on('click',function(){
            $search[0].style.display = 'none';
            return false;
        });

    })();


//轮播图

    (function(){
        var swiper1 = new Swiper('#swiper1', {
            spaceBetween: 3000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },        
            effect: 'fade',
            loop: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
        });
    })();

//轮播图1

    (function(){
        var mySwiper = new Swiper ('.main .swiper-container', {
            spaceBetween: 300,
            effect: 'fade',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },        
            loop: true, // 循环模式选项
            // // 如果需要分页器
            // pagination: {
            // el: '.main .swiper-pagination',
            // clickable: true,
            // },
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
            },
            // 如果需要滚动条
            // scrollbar: {
            //   el: '.main .swiper-scrollbar',
            // },
        });       
//轮播图2
        var mySwiper2 = new Swiper('.main .swiper-container', {
            spaceBetween: 300,
            effect: 'fade',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },        
            loop: true, // 循环模式选项
            // pagination: {
            //   el: '.main .swiper-pagination',
            //   clickable: true,
            // },
            // navigation: {
            //   nextEl: ' .main .swiper-button-next',
            //   prevEl: '.main .swiper-button-prev',
            // },
        });
    })();

//魅力乌镇蒙板
    (function(){
            var $mengban = $('.mengban');
            var $ultopMig = $('.ultop  img');
            var $ultopUl = $('.ultop ul');
            var $inContent = $('.incontentdiv');
            for(let i = 0;i < $inContent.length; i++){
                $inContent[i].bcd=i
                $inContent[i].onmouseenter=function(){
                    $mengban[this.bcd].style.display = 'block';
                    $ultopUl[this.bcd].style.display = 'block';
                }
                $inContent[i].onmouseleave=function(){
                    $mengban[this.bcd].style.display = 'none';
                    $ultopUl[this.bcd].style.display = 'none';
                }
            }
    })();


}
