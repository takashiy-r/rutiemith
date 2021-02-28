
$(function(){
    var window_h = window.innerHeight;
    console.log(window_h);
    
    var kfOpc = 0.1;
    $('.img1').css('opacity',kfOpc);

            $(window).scroll(function(){
                var roll = $(this).scrollTop();
                console.log(roll);
                var rollper = roll/window_h;
                if(rollper < 0.2){
                    $('.box1').css('background-position','center 30%');
                    $('.img1').css('top',rollper*100*0.7+'vh');

                    if(kfOpc < 0.8){
                        $('.img1').css('opacity',kfOpc+=0.1);
                    }
                            
                }else if(rollper >= 0.2 && rollper < 0.3){
                    $('.box1').css('background-position','center 30%');
                    $('.box3').css('background-position','right '+(rollper*100*0.1)+'vh');
                    $('.img1').css('top',rollper*100*0.7+'vh');

                }else if(rollper >= 0.3 && rollper < 0.7){
                    $('.box3').css('background-position','right '+(rollper*100*0.1)+'vh');

                }else if(rollper >= 0.7 && rollper < 1){
                    
                }else if(rollper >= 1){
                    $('.box3').css('background-position','right 0');
                }else{

                }                
                
            });
            rollstop = rollper*100*0.1;
});