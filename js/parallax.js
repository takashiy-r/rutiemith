
$(function(){
    
    // $('.box1').css('background-position','center ','top');
            $(window).scroll(function(){
                var roll = $(this).scrollTop();
                console.log(roll);
                var window_h = window.innerHeight;
                console.log(window_h);

                // $('#bg2').css('position',);
                if(roll/window_h > 0.4 && roll/window_h < 0.8){
                    $('.box3').css('background-position','right '+(roll-window_h*0.4)+'px');
                }else if(roll/window_h > 0.8){
                    $('.box4').css('background-position','center '+(roll-window_h*0.6)+'px');
                    // $('.img1').css('position','right '+(roll-window_h*0.4)+'px');
                }else{
                    $('.box3').css('background-position','right 0');
                    $('.box4').css('background-position','center 0');
                }                
                if(roll = window_h){
                    $('.box4').css('background-position','center bottom');
                    $('.img1').css('position','right bottom');
                }
/*                 if(roll > 1600){
                    $('#bg3').css('background-position','0 '+(roll-1600)+'px');
                }else{
                    $('#bg3').css('background-position','0 0');
                } */
/*                 if(roll > 1600){
                    $('#contact').css('opacity', (roll-1600)/800);
                    $('#contact').css('top',500);
                  }else{
                    $('#contact').css('opacity', 0);
                  } */
            });
});