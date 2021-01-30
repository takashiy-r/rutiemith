
$(function(){
    var window_h = window.innerHeight;
    console.log(window_h);
    $('.img1').css('top',window_h +'vh');
    var kfOpc = 0;
    $('.img1').css('opacity',kfOpc);

            $(window).scroll(function(){
                var roll = $(this).scrollTop();
                console.log(roll);
                var rollper = roll/window_h;
                // var rollstop = '90vh';
                if(rollper < 0.2){
                    $('.box1').css('background-position','center top');
                    $('.img1').css('top',rollper*100*0.5+'vh');

                    if(kfOpc < 0.8){
                        $('.img1').css('opacity',kfOpc+=0.1);
                    }
                            
                }else if(rollper >= 0.2 && rollper < 0.3){
                    $('.box1').css('background-position','center top');
                    $('.box3').css('background-position','right '+(rollper*100*0.1)+'vh');
                    $('.img1').css('top',rollper*100*0.4+'vh');

                }else if(rollper >= 0.3 && rollper < 0.7){
                    $('.box3').css('background-position','right '+(rollper*100*0.1)+'vh');
                    $('.img2').css('top',rollper*100*0.45+'vh');
                    $('.img1').css('top',0);

                }else if(rollper >= 0.7 && rollper < 1){
                    $('.box4').css('background-position','center '+(rollper*100*0.1)+'vh');
                    $('.img2').css('top',rollper*100*0.45+'vh');
                    
                }else if(rollper >= 1){
                    $('.box3').css('background-position','right 0');
                    $('.box4').css('background-position','center bottom');
                    $('.img2').css('position','right bottom');
                }else{

                }                
                

/*                 if(roll > 100){
                    $('.img1').css('opacity', (roll-100)/50);
                    $('.img1').css('top',50);
                  }else{
                    $('.img1').css('opacity', 0);
                  } */
            });
            rollstop = rollper*100*0.1;
});