    
     (function($){
        
         
        $(".header_arrow").on('click', function(){
      $('body').animate({scrollTop:2000} , 1000); 
 });
         
   $(".one").addClass('active');      
 var i=0;
         var count=0;
var slideWidth=$(".slides li").width();
   
var sliderWidth=$('.slides').children().size()*2000;
    $(".slider.slides").css('width', sliderWidth);
   
      
   function slider(){
       var number=$(".slides li img").attr('data-slide-to');
       var active=$(".slides li img");
       
        i++;
        
        switch(count){
			case 0:
				
				$(".one").addClass('active');
                $(".three").removeClass('active');
				
				break;
			case 1:
				
				$(".one").removeClass('active');
				$(".two").addClass('active');
				
				break;
			case 2:
				
				$(".three").addClass('active');
				$(".two").removeClass('active');
				
				break;
            default:$(".one").addClass('active');
		}
		
		count++;
		
		if(count==3){
           count=0;
		}
        
        $(".slides").append($(".slides").children().first().clone());
       $(".slides").children(":eq(1)").children(".desc").show();
		$(".slides").children(":eq(1)").children().animate({width:600,height:600}, 1000);
       
		$(".slides").children(":eq(2)").children().animate({width:450,height:450}, 0) ;       
		
		$(".slides").animate({marginLeft:"-"+$(".slides").children().first().width()+"px"}, 2000)       
        
		$(".slides").children().first().fadeOut(2000, function(){			
			$(".slides").children().first().remove();
			$(".slides").animate({marginLeft:0}, 0);
			
			
			
			$(".slides").children(":eq(0)").addClass('active')
			if( $(window).width() < 1024 ){
				$('.slider_nav_arrows').css({height: $('.slider li.active img').outerHeight(), opacity:1});
			}
			else{
				$('.slider_nav_arrows').css({height: 600, opacity:1});
			}
			
        })

   
	}
	
	

	$(window).resize(function(){
		if( $(window).width() < 1024 ){
			$('.slider li').css({width: $(window).width()});
			$('.slider_nav_arrows').css({height: $('.slider li.active img').outerHeight()})
		}
		else{
			$('.slider li').css({width: 600});
			$('.slider_nav_arrows').css({height: 600})
		}
	})
	if( $(window).width() < 1024 ){
		$('.slider li').css({width: $(window).width()});			
	}
	else{
		$('.slider li').css({width: 600});
	}

  
  
  
	setInterval(slider,3000);
	
     
    $("#next").click(function(){
		//slider();
			
    })
	
	
	
	
	
   
})(jQuery)

    
    
    
    
    

    
    
    
    
    
    

    
  
    

  

