window.onload = function(){
	//头部点击
	(function(){
		var $working = $('.working');
		$working.on('click',function(){
				alert('施工中...');
				return false;
			});
		})();
	//头部导航栏
	(function(){
		var umBox1 = document.querySelectorAll('.umBox1');
		var staTics1 = document.querySelectorAll('.staTics1');
		var movings1 = document.querySelectorAll('.movings1');
	
		for (var i = 0; i < umBox1.length; i++){
		    movings1[i].timer = null;
		    umBox1[i].index = i;
		    umBox1[i].onmouseenter = function (){
		        movings1[this.index].style.display = 'block';
		    }
		    umBox1[i].onmouseleave = function (){
		        movings1[this.index].style.display = 'none';
		    }
		}
	
		console.log(123);
		
	})();

	// 轮播图
	(function(){
		var swiper1 = new Swiper('#swiper1', {
		      spaceBetween: 30,
		      centeredSlides: true,
		      autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		    });
	})();
	
	// 右侧固定栏
	
	(function(){
		var boxs = document.querySelectorAll('.box');
		var statics = document.querySelectorAll('.statics');
		var moveing = document.querySelectorAll('.moveing');
		var toTOP = document.querySelector('.toTop')
		var scrollTop = document.documentElement.scrollTop;
		for (var i = 0; i < boxs.length; i++){
		    moveing[i].timer = null;
		    boxs[i].index = i;
		    boxs[i].onmouseenter = function (){
		        statics[this.index].style.background = '#f57d00';
		        move(moveing[this.index],-80);
		    }
			
		    boxs[i].onmouseleave = function (){
		        statics[this.index].style.background = 'rgba(0, 0, 0, 0.5)';
		        move(moveing[this.index],80);
		    }
		}
		toTOP.onclick = function(){
			document.body.scrollTop = document.documentElement.scrollTop = 0; 
		}
		function move(dom,target){
		    clearInterval(dom.timer);
		    dom.timer = setInterval(function (){
		        var speed = (target - dom.offsetLeft) / 10;//持续变好的速度
		
		        // 浮点数计算，造成数据丢失，无法到达目的地  => 取整
		        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		        
		        // 剩余运动量 <= 1
		        if (Math.abs(dom.offsetLeft - target) <= 1) {
		            clearInterval(dom.timer);
		            dom.style.left = target + 'px';//手动设置终点
		        } else{
		            dom.style.left = dom.offsetLeft + speed + 'px';//每次的运动
		        }
		    },20);
		}
	})();
	
	// 底部轮播图
	(function(){
		 var swiper2 = new Swiper('#swiper2', {
		      slidesPerView: 3,
		      spaceBetween: 30,
		      slidesPerGroup: 3,
		      loop: true,
		      loopFillGroupWithBlank: true,
		      pagination: {
		        el: ' .linger .swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.linger .swiper-button-next',
		        prevEl: '.linger .swiper-button-prev',
		      },
		    });
			
		
	})();
	
	
	
	
	
		
}
 