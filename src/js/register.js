window.onload = function(){
	//头部点击
	(function(){
		var $working = $('.working');
		$working.on('click',function(){
				alert('施工中...');
				return false;
			});
	})();
		

	//头部导航
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
	
	})();
	
	
	
	
}