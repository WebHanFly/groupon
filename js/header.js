

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



	  //nav-good list下的hover
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
  


   //goods 幻灯片的切换
        $($('.carousel-img>img')[0]).addClass('img_active');
        $($('.carousel-img span')[0]).addClass('span_active');
        var now = 0;
        function carousel(){
            $('.carousel-bot span').each(function(i,ele){
               
                $(this).click(function(){
                    now = $(this).index()-1;
                    for(var j=0;j<4;j++){
                    $($('.carousel-img>img')[j]).removeClass('img_active');
                    $($('.carousel-bot span')[j]).removeClass('span_active');
                        }
                    $($('.carousel-bot span')[now]).addClass('span_active');
                    $($('.carousel-img>img')[now]).addClass('img_active');
                   });

               });
               
                  $("#carousel-bot-p1").click(function(){

                      if(now>0){
                        now--;
                        for(var j=0;j<4;j++){
                             $($('.carousel-img>img')[j]).removeClass('img_active');
                             $($('.carousel-bot span')[j]).removeClass('span_active');
                            
                             }
                    $($('.carousel-bot span')[now]).addClass('span_active');
                    $($('.carousel-img>img')[now]).addClass('img_active');
                   
                     }

                 });
                  $("#carousel-bot-p2").click(function(){
                       
                      autoplay();

                 });
              
           


            }
             
        carousel();
        var timer = setInterval(function(){
             autoplay();
        },3000);

         function autoplay(){
            
                        if(now<3){
                        for(var j=0;j<4;j++){
                             $($('.carousel-img>img')[j]).removeClass('img_active');
                             $($('.carousel-bot span')[j]).removeClass('span_active');
                         }
                        now++;
                        $($('.carousel-bot span')[now]).addClass('span_active');
                        $($('.carousel-img>img')[now]).addClass('img_active');


                         }else{
                            now = -1;
                         }
                     } 
        $('.carousel-bot').hover(function(){
            clearInterval(timer);
        },function(){
            setInterval(function(){
             autoplay();
            },3000);
        })
       


        // $('.carousel-text > ul li').each(function(i,element){
        // var _this = element; 
        // $(this).hover(
        //     function()
        //     {
        //     $(_this).css('backgroundColor','#53a318').addClass('red green').find('a').css('color','#fff')}
        //     ,function()
        //     {
        //         $(_this).css('backgroundColor','').removeClass('red green').find('a').css('color','#888');
        //     }
        //     );
        // } 




  
});   //$domready  结束