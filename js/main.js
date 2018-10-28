$(document).ready(function(){
	 $(window).scroll(function(){
	    let h = $('header').position().top;
	    let t = $(window).scrollTop();
	  if(t > 100){
	   $('#header').css({ background: 'white' , boxShadow: '0 0 2px 2px #80808073',transition: '1s'});
	   
	   //  telegram's color

	   $('.teleg').css({ background: 'dodgerblue' , border: '2px solid #0000008c' , border: '1px solid #00000091' , transform: 'scale3d(1.2,1.2,1.2)' , color: 'white', transition: '1s'});

	   //facebbok's color

	   $('.face').css({ background: 'blue' , border: '2px solid #0000008c' , border: '1px solid #00000091' , transform: 'scale3d(1.5,1.5,1.5)' , color: 'white', transition: '1s'});

	   //twitter's color

	   $('.twit').css({ background: 'dodgerblue' , border: '2px solid #0000008c' , border: '1px solid #00000091' , transform: 'scale3d(1.2,1.2,1.2)' , color: 'white', transition: '1s'});

	   $('#menu > ul > li > a').css({color : 'black' , transition : '1.5s'});
	   $('#hidden-menu').css({color: 'black' , transition : '1.5s' });
	  } else{
	   $('#header').css({background: 'transparent' , color: 'white' , boxShadow: 'none',transition: '1.5s'})
	   $('.teleg').css({ background: 'white' , border: '2px solid #0000008c' , transform: 'scale3d(1,1,1)' , color: 'dodgerblue', transition: '1.5s' });
	   $('.face').css({ background: 'white' , border: '2px solid #0000008c' , transform: 'scale3d(1,1,1)' , color: 'blue', transition: '1.5s' });
	   $('.twit').css({ background: 'white' , border: '2px solid #0000008c' , transform: 'scale3d(1,1,1)' , color: 'dodgerblue', transition: '1.5s' });
	   $('#menu > ul > li > a').css({color : 'white' , transition : '1.7s'});
	   $('#hidden-menu').css({color: 'white' , transition : '1.5s' });
	  }
	    
	  });

	//fixed-icon

	$(window).scroll(function(){
	    let h = $('header').position().top;
	    let t = $(window).scrollTop();
	    if( t > 650 ){
	    	$('.up').css({display: 'block' , transition: '5s'})
	    }else{
	    	$('.up').css({display: 'none' , transition: '2s'})
	    }
	   });
	$('.up').click(function(){
		$("html, body").animate({ scrollTop: 0 },900);
	});
	$('#hidden-menu').click(function(){
		$('#menu > ul').slideToggle(450)
	});
})


















