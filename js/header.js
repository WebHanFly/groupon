

$(function(){
	//导航栏的hover   拷贝
(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function(){
                $.noop();
            },
            outEvent: function(){
                $.noop();    
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
            },function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(sets.outEvent, sets.outDuring);
            });    
        });
    }      
})(jQuery);


$(".head-nav > ul li").each(function(i,element){
    // var that = $(this);
   		 var _this = this;
			$(this).hoverDelay({
            outDuring: 100,
            hoverDuring: 100,
			hoverEvent: function(){
               var $list = $('.list-wrap > div')[i];
          		$($list).css('display','block').siblings().css('display','none').hover(function(){$(this).css('display','block')},function(){$(this).css('display','none')});
          		$(_this).find('a').addClass('nav-tabs-act');      

            },
            outEvent: function(){
               $(_this).find('a').removeClass('nav-tabs-act');
            }
        });
    
});



  //未延时
	// $('.head-nav > ul li').each(function(i,element){
 //            var _this = this;
	// 	    $(this).hover(function(){
 //           		var $list = $('.list-wrap > div')[i];
 //           		$($list).css('display','block').siblings().css('display','none');
 //           		$(_this).find('a').addClass('nav-tabs-act');
 //           },function(){
 //           		$(_this).find('a').removeClass('nav-tabs-act');
 //           })
	// })


//  一个
// $(".goods-list > ul li").each(function(i,element){
//     // var that = $(this);
//    		 var _this = this;
// 			$(this).hoverDelay({
//             outDuring: 0,
//             hoverDuring: 100,
// 			hoverEvent: function(){
//                var $block = $('.goods-liston > div')[i];
//  			$($block).css('display','block').siblings().css('display','none');
//  			$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
//  			$($block).hover(function(){
//  				$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
//  			},function(){
//  				$(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
//  			});

//             },
//             outEvent: function(){
//               $(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
//             }
//         });
    
// });


//两个

	// goods-list 下的hover
// 	$(".goods-list > ul li").each(function(i,element){
//     // var that = $(this);
//    		 var _this = this;
// 			$(this).hoverDelay({
//             hoverDuring: 100,
//             outDuring: 100,
// 			hoverEvent: function(){
//               var $block = $('.goods-liston > div')[i];
//  			$($block).css('display','block').siblings().css('display','none');
 			
// 					$($block).hoverDelay({
// 					hoverDuring: 100,
// 		            outDuring: 100,
// 					hoverEvent: function(){
// 		               $(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');    

// 		            },
// 		            outEvent: function(){
// 		               $(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
// 		            }
		        
		    
// 					});
// 			$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
					
//  			// $($block).hover(function(){
//  			// 	$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
//  			// },function(){
//  			// 	$(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
//  			// });
//             },
//             outEvent: function(){
//               $(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
//             }
//         });
    
// });

		
		$('.goods-list > ul li').each(function(i,element){
		var _this = element; 
 		$(this).hover(function(){
 			var $block = $('.goods-liston > div')[i];
 			$($block).css('display','block').siblings().css('display','none');
 			$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
 			$($block).hover(function(){
 				$(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff');
 			},function(){
 				$(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
 			});
 		},function(){
 			$(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
 		});	
	});
  
	





  
}) 