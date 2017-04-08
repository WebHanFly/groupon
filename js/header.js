

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
        var timer = null
        clearInterval(timer);
        timer = setInterval(autoplay,3000);
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

       // 清除定时器
        // $('.carousel-bot').hover(function(){
        //      //alert(12);
        //     clearInterval(timer);

        // },function(){
        //     clearInterval(timer);
        //     var timer = setInterval(autoplay,3000);
        // })
       


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





 //footer测试
 // 给div里面一次添加一个个字符串。运用到了闭包，初始化对象，文档树加载完毕立即执行init函数，并且在init里面调用相关的配置函数。。。。等知识
   $(function(){
    var app;
    //初始化init  在dom ready完成后进行自动执行APP.init函数；
    $(document).ready(function(){
         app.init();
    });
    //初始化APP这个对象。并且给这个对象配置相应的属性；
       app = {
        text:"给div里面一次添加一个个字符串。运用到了闭包，初始化对象，文档树 ",
        index:0,
        chars:0,
        speed:150,
        container:".footer .content",
        init:function(){
            this.chars = this.text.length;
            //在这里需要调用一下write函数；但是这里与源代码有些不一样的是我没有使用return来返回函数；
            this.write();
        },
        write:function(){
            //这里主要用来负责给div里面append进去一个个的字符串。用index来索引
           $(this.container).append(this.text[this.index]);
           //chars 用来判断字符串是否到达最后一个字符；没有则开个定时器一个个添加进去
            if(this.index<this.chars){
                this.index++;
                setTimeout(function(){
                     app.write();
                },this.speed)
            }
        }
       };
   }.call(this));//this 是为了保证闭包里面的this指向统一





 // footer5 
   var  sh = 18;
   function dropsh(val){
        var $tesh = $('.footer5 div p').css('textShadow');
        $('.footer5 div p').css('textShadow',$tesh+','+val+'px 0 #ff7373')
   }
   var i = 0;
   function myloop(){
    setTimeout(function(){
        dropsh(i);
        i++;
        if(i<sh){myloop()}
    },5*(i*5/3))
   }
   myloop();



// footer7 点击显示进度条
   $(function(){
        var btn = $('.footer7 .btn');
        btn.on("click",function(){
            $(this).addClass('btn__progress');
            setTimeout(function(){
                btn.addClass('btn__progress--fill')
            },500);
            setTimeout(function(){
                btn.removeClass('btn__progress--fill')
            },4100);
            setTimeout(function(){
                btn.addClass('btn__complete')
            },4400)
        })

   })



   // footer8 点击背景颜色显示并且一次排开
   var parent, ink, d, x,y;
   $('.footer8 ul li a').on('click',function(e){
            parent = $(this).parent();

            if(parent.find('.ink').length == 0){

                parent.prepend('<em class="ink"></em>')
            }
           ink = parent.find('.ink');
           ink.removeClass('animation');
           if(!ink.height()&&!ink.width()){
            d = Math.max(parent.outerWidth(),parent.outerHeight());
            ink.css({width:d,height:d});
           }

           x = e.pageX-parent.offset().left-ink.width()/2;
           y = e.pageY-parent.offset().top-ink.height()/2;
           ink.css({top:y+'px',left:x+'px'});
           ink.addClass('animation');

  
   })
















  
});   //$domready  结束