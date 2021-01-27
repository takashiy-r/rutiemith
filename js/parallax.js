
$(function(){
            $(window).scroll(function(){
                var roll = $(this).scrollTop();
                console.log(roll);
                $('#bg1').css('background-position','center '+roll+'px');
                // $('#bg2').css('position',);
                if(roll > 600){
                    $('#bg2').css('position','0 '+(roll-600)+'px');
                }else{
                    $('#bg2').css('position','0 0');
                }
                if(roll > 800){
                    $('#bg3').css('background-position','0 '+(roll-1600)+'px');
                }else{
                    $('#bg3').css('background-position','0 0');
                }
/*                 if(roll > 1600){
                    $('#msg').css('opacity', (roll-1600)/800);
                    $('#msg').css('top',500);
                  }else{
                    $('#msg').css('opacity', 0);
                  } */
            });
});