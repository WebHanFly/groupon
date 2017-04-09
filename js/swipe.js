$(function(){
	function Swipe(container){
		var element = container.find(":first");
		var swipe = {};
		var sliders = element.find('li');
		var width = container.width();
		var height = container.height();
	
		element.css({width:(sliders.length*width)+'px',height:height+'px'});
		$.each(sliders,function(i){
			var slider = sliders.eq(i);
			slider.css({width:width+'px',height:height+'px'});
		});

		swipe.scrollTo = function(x,speed){
			elements.css({
				'transition-timing-function' : 'linear',
	            'transition-duration'        : speed + 'ms',
	            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
			});
			return this;
		};
		return swipe;
	}


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
			top:pathY-boyHeight
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
 	return (direction == x?visualWidth:visualHeight)*proportion;
 	
 }










});