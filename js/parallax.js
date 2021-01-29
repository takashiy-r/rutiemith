
$(function(){

            $(window).scroll(function(){
                var roll = $(this).scrollTop();
                console.log(roll);
                var window_h = window.innerHeight;
                console.log(window_h);

                if(roll/window_h > 0.2 && roll/window_h < 0.4){
                    $('.box1').css('background-position','center top');
                    $('.box3').css('background-position','right '+(roll-window_h*0.4)+'px');
                    $('.img1').css('top',(roll-window_h*0.9)+'px');
                    // $('.img1').css('opacity',1)                
                }else if(roll/window_h > 0.4 && roll/window_h < 0.7){
                    $('.box3').css('background-position','right '+(roll-window_h*0.4)+'px');
                    $('.img2').css('top',roll-window_h*1.1);
                    $('.img1').css('top',0);
                }else if(roll/window_h > 0.7){
                    $('.box4').css('background-position','center '+(roll-window_h*0.4)+'px');
                    $('.img2').css('top',roll-window_h*1.1);
                }else{
                    $('.box3').css('background-position','right 0');
                    $('.box4').css('background-position','center 0');
                    $('.img2').css('top',500);
                }                
                if(roll = window_h){
                    $('.box4').css('background-position','center bottom');
                }

/*                 if(roll > 100){
                    $('.img1').css('opacity', (roll-100)/50);
                    $('.img1').css('top',50);
                  }else{
                    $('.img1').css('opacity', 0);
                  } */
            });
});