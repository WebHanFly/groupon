

	//--对boy的背景进行封装，并且进行自适应处理。返回一个自适应的boy背景的swipe对象
	function Swipe(container){
		var element = container.find(":first");
		var swipe = {};
		var sliders = element.find('>');
		var width = container.width();
		var height = container.height();
		element.css({width:(sliders.length*width)+'px',height:height+'px'});
		$.each(sliders,function(i){
			var slider = sliders.eq(i);
			slider.css({width:width+'px',height:height+'px'});
		});
		console.log(element.width());

		swipe.scrollTo = function(x,speed){
			element.css({
				'transition-timing-function' : 'linear',
	            'transition-duration'        : speed + 'ms',
	            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
			});
			return this;
		};
		return swipe;
	}//---------------swipe结束-----------//


		


 






//---------------domready 结束-------------//