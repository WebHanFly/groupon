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
//暂停走路
function pausewalk(){
	$boy.addClass('pausewalk');
}


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
			dfdplay.resolve(); //动画完成
		}
	);
	return dfdplay;

}



 //开始走路
 function walkrun (time,dist,distY){
 	time = time || 3000;
 	slowwalk();
 	//开始走路
 	var d1 = cssanimation({
 		left: dist+'px',
 		top:  distY ? distY : undefined
 		},time);
 	return d1;

 }

//走进商店
function walktoshop(runtime){
	var defer = $.Deferred();
	var doorObj = $('.door');
	var offsetdoor = doorObj.offset();
	var dooroffsetleft = offsetdoor.left;
	var offsetboy = $boy.offset();
	var boyoffsetleft = offsetboy.left;

	//当前需要移动的坐标；
	instanceX = (dooroffsetleft+doorObj.width()/2)-(boyoffsetleft+$boy.width()/2);

	//开始走路
	var walkplay = cssanimation({
		//transform: 'translateX(' + instanceX + 'px)',
		transform:'scale(0.3,0.3)',
		//opacity:0.1 
	},2000);

	//走路完毕：
	walkplay.done(function(){
		$boy.css({
			//opacity:0
		});
		defer.resolve();
	});
	return  defer;

}


//走出商店
function walkoutshop(runtime){
		var defer = $.Deferred();

		var walkplay = cssanimation({
		transform:'translateX('+instanceX+'px),scale(1,1)',
		opacity:1 
	},runtime);

	//走路完毕：
	walkplay.done(function(){
		
		defer.resolve();
	});
	return  defer;

}




return {
	//开始走路
	  walkTo: function(time,proportionx,proportiony){
		  	var distx = calcdist('x',proportionx);
		  	var disty = calcdist('y',proportiony);
		  	return walkrun(time,distx,disty);
	  },
	  //暂停走路
	  stopwalk:function(){
	  	pausewalk();
	  },
	  //走进商店
	  toshop:function(){
	  	return walktoshop.apply(null,arguments);
	  }




};



} //----------- boywalk 结束




//第二幅画面的开关门
function dooraction(lef,righ,time) {
	var $door = $('.door');
	var doorleft = $('.door_left');
	var doorright = $('.door_right');
	var defer = $.Deferred();
	var count = 2;
	//等待开门完成
	var complete = function (){
		if(count === 1 ){
			defer.resolve();
			return;
		}
		count--;
	};
	$('.door_left').animate({
		left:lef
	},time,complete);
	$('.door_right').animate({
		right:righ
	},time,complete);
	
	 return defer;
	 
}   //-----------dooraction结束------------------

//-----开门
function opendoor(){
	
	return dooraction('-50%','-50%',2000);

}
//关门
function shutdoor() {
	return dooraction('0%','0%',2000);
}





 

