window.onload = function(){
	console.log(1)
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
    })();


// 链接百度接口
    var searchBtn = document.querySelector('.search-sub');
    var searCha =  document.querySelector('.search-a');
    var list = document.querySelector('.list');
    var oScript = null;
    searchBtn.onclick = function(){

    // searCha.onkeyup = function(){
        if(!searCha.value){
            list.innerHTML=" ";
            return;
        }
        if(oScript){
            document.body.removeChild(oScript);
        }
        oScript = document.createElement('script');
        oScript.src = 'http://suggestion.baidu.com/su?wd='+searCha.value+'&cb=myCallback';
        document.body.appendChild(oScript);
        searCha.value="";
    }
    window.myCallback=function (json){//请求成功的处理函数
        // console.log(typeof json);//打印返回的数据类型
        // console.log(json);
        list.innerHTML ="";
        for(var i = 0; i < json.s.length; i++){
            list.innerHTML += '<li><a href="#"><h2>${json.s[i]}</h2></a></li>';
        }
    }


     //返回顶部
    
     var $gotop = $('.gotop')
     window.onscroll = function (){
         var scrollT = document.documentElement.scrollTop|| document.body.scrollTop;// 滚动条高度
         if ( scrollT>200) {//滚动条高度>1000
             $gotop[0].style ="display:block";
         }else{
             $gotop[0].style ="display:none";
         }
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
        },0);
    }
}