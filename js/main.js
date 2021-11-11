
$(document).ready(function(){
    /* navbar */
    $('.pageList li a').on('click',function(){
        
        $('.pageList li a').removeClass('on')
        $(this).addClass('on')
    })


    /* portfolio */
    $('.pageBtn a').on('click',function(e){
        e.preventDefault();
        $('.pageBtn a').removeClass('on')
        $(this).addClass('on')

        var num=$(this).index()
        var current = num + 1
        if(num == current ){
            current = 0
        }
        $('.pofol').hide()
        $('.pofol').removeClass('on');
        $('.pofol:eq('+ num +')').fadeIn(700)
        $('.pofol:eq('+ current +')').fadeOut(1000)

    })

     $(window).scroll(function(){
         var scrollpos=$(window).scrollTop()
         var page2=$('.page2Wrap').offset().top
         var page3=$('.page3Wrap').offset().top
         var page4=$('.page4Wrap').offset().top
         var cont=$('.intro').offset().top

        if(scrollpos > page2-($(window).height()/4)){
            $('.page2Wrap').css({
                'position':'absolute',
                'top':"8%",
                'opacity':"1",
                'transition':'all 1.5s ease',
                'transitionDelay':'o.1s',
            })
        }

        if(scrollpos > page3-($(window).height()/4)){
            $('.page3Wrap').css({
                'position':'absolute',
                'top':"7%",
                'opacity':"1",
                'transition':'all 1.5s ease',
                'transitionDelay':'o.1s',
            })
        }

        if(scrollpos > page4-($(window).height()/4)){
            $('.page4Wrap').css({
                'position':'absolute',
                'top':"6%",
                'opacity':"1",
                'transition':'all 1.5s ease',
                'transitionDelay':'o.1s',
            })
        }

       
     })

        /* pagescroll */
        var position=0
        var distance=0

        /* navbar */
        var nav=$('.pageList li a');
        var page=$('.page')
        $(window).scroll(function(){
            var wScroll=$(this).scrollTop()

            for(var i=0; i<page.length; i++){
                if(wScroll>=page.eq(i).offset().top){
                nav.removeClass('on')
                nav.eq(i).addClass('on')
                }
            }
        })

})