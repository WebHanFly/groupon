$(function(){
	var boy = $('#boy');
	var itme1Width = $(".content").find('li').width();
	boy.addClass('slowwalk');

	 function slowwalk(){
		$('#boy').animate({left:itme1Width},10000,'linear');
	}
  	
 	slowwalk();
 	//console.log(boy.css('left'))
 	if(boy > itme1Width/2){
 		
 		$('.wrap').animate({left:itme1Width/2},5000,'linear')
 		
 	
 	}

 	
});




