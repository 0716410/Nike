$(document).ready(function(){

    $('.topbtn').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });

    $("#left").click(function(){
        $(".img_wrap>li").css({
            opacity:0.2,
            transform:"scale(0.7)"
        });
        $(".img_wrap>li").eq(2).css({
            opacity:1,
            transform:"scale(1)"
        });
        $(".img_wrap").animate({
            left:-500
        },function(){
            $(".img_wrap").css("left",0).find("li:first").appendTo(".img_wrap");
        });
    });
    
    $("#right").click(function(){
        $(".img_wrap>li").css({
            opacity:0.2,
            transform:"scale(0.7)"
        });
        $(".img_wrap>li").eq(0).css({
            opacity:1,
            transform:"scale(1)"
        });
        $(".img_wrap").animate({
            left:500
        },function(){
            $(".img_wrap").css("left",0).find("li:last").prependTo(".img_wrap");
        });
    });
    
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 600){
            $('.topbtn').addClass('on_topbtn')
        }   else { $('.topbtn').removeClass('on_topbtn');
            }

        if(sct >= 400){
            $('.feat1').addClass('feat1_active')
        }

        if(sct >= 920){
            $('.feat2').addClass('feat2_active')
        }

        if(sct >= 1800){
            $('.sec3_i').addClass('sec3_i_active')
        }

    });

  
  

});//end