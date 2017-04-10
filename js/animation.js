function boywalk(){

		var container = $('.content');
		//页面的可视区域
		var visualWidth = container.width();
		var visualHeight = container.height();
		var swiper = Swipe(container);  //给content传进swipe里面，返回一个swipe对象
		//获取数据
		var getValue = function (classname) {
			var $elem = $(''+classname+'');
			//走路的路线坐标
			return {
				height:$elem.height(),
				top: $elem.offset().top,
			};
		};
		//路的Y轴
		var pathY = function(){
			var data = getValue('.a_background_middle');
			return data.top+data.height/2;
		}();
		var $boy = $('#boy');
		var boyHeight = $boy.height();
		//修正男孩的正确位置
		$boy.css({
			top:pathY-boyHeight+25
		});


//////////////////////////////////动画处理
///恢复走路
    function restoreWalk(){
    	$boy.removeClass('pausewalk');
    }

 //小男孩 的动作变化
 function slowwalk(){
 	$boy.addClass('slowwalk');
 }
 //计算移动距离
 function calcdist (direction,proportion){
 	return (direction == 'x'?visualWidth:visualHeight)*proportion;
 	
 }

//用css animation做运动  接受一个option对象，给它配置css改变的属性和runtime运动的时间
function cssanimation(options,runtime){
	var dfdplay = $.Deferred();
	//恢复走路
	restoreWalk();
	//运动属性
	$boy.animate(
		options,
		runtime,
		'linear',
		function(){
			dfdplay.resolve();
		}
	);
	return dfdplay;

}



 //开始走路
 function walkrun (time,dist,distY){
 	time = time || 300;
 	slowwalk();
 	var d1 = cssanimation({
 		left: dist+'px',
 		top:  distY ? distY : undefined
 		},time);
 	return d1;

 }

return {
	//开始走路
	  walkTo: function(time,proportionx,proportiony){
		  	var distx = calcdist('x',proportionx);
		  	var disty = calcdist('y',proportiony);
		  	return walkrun(time,distx,disty);
	  },
	  stopwalk:function(){
	  	pausewalk();
	  },
	  setColor:function(value){
	  	$boy.css('backgroundColor',value);
	  }


};





} //----------- boywalk 结束



