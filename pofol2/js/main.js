
$(document).ready(function(){
    $('.header_wrap > ul > li').on({
        click:function(e){
            e.preventDefault();
            var pagenum=$(this).index();
            var section=$('#container > section').eq(pagenum)
            var offset=section.offset().top

            $('html,body').animate({
                scrollTop:offset
            },600,'easeInOutExpo')
        }
    })

    var sec=$('.home .visual_txt').offset().top;
            $(window).scroll(function(){
                
                var wScroll=$(window).scrollTop() 
                console.log(wScroll)
                if(wScroll > sec-($(window).height()/1)){
                    $('.home').addClass('show')
                }else{
                    $('.home').removeClass('show')
                }

            })

            $('#toggleBtn a').on('click',function(e){
                e.preventDefault();
                $('.toggle1').toggleClass('on')
                $('.toggle2').toggleClass('on')
                $('.toggle3').toggleClass('on')
                $('.header_wrap').toggleClass('on')
                $('.toggle_font').toggleClass('on')
                $(this).toggleClass('on')
                
            })

            $('.scroll').on('click',function(e){
                var nextPage=$($(this).attr('href'))
                    $('html,body').animate({
                        scrollTop:nextPage.offset().top
                    },500)
            })

            /* release */
            bannerWidth=290
            titleWidth=250
            $('.leftBtn').on('click',function(e){
                e.preventDefault();
                $('.cd_list').prepend($('.cd_list li:last'))
                $('.cd_list').css('left','-' + bannerWidth + 'px')
                $('.cd_list').css('left','0')
                $(this).parents().find('.cd_list >li').eq(2).toggleClass('center')

                $('.title').prepend($('.title dl:last'))
                $('.title').css('left','-' + titleWidth + 'px')
                $('.title').css('left','0')

            })

            $('.rightBtn').on('click',function(e){
                e.preventDefault();
                $('.cd_list').css('left','-' + bannerWidth + 'px')
                $('.cd_list').append($('.cd_list li:first'))
                $('.cd_list').css('left','0') 
                $(this).parents().find('.cd_list >li').eq(2).toggleClass('center')

                $('.title').append($('.title dl:first'))
                $('.title').css('left','-' + titleWidth + 'px')
                $('.title').css('left','0')
            })
})
