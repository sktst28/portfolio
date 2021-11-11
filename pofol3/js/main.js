
    $(document).ready(function(){

        /* gnb toggle */
        $('.m_hbtn').on('click',function(){
        $('.header_wrap').find('.toggle').toggleClass('on')
             })
        $('.closeBtn').on('click',function(){
        $('.header_wrap').find('.toggle').toggleClass('on')
             })

        /* lang btn */
        $('.lang_btn').on('click',function(){

        })


        /* visual */
        $('.visual_list li:gt(0)').hide()
        $('.visual_btn a').on('click',function(e){
            e.preventDefault();
            var num=$(this).parent().index()
            var cuttentNum=$('.visual_btn a.on').parent().index()

            if(num != cuttentNum){
                $('.visual_btn a.on').removeClass('on')
                $('.visual_btn li:eq('+num+') a').addClass('on')
                $('.visual_list li:eq('+num+')').show();
                $('.visual_list li:eq('+num+')').css('left','1920px')

                $('.visual_list li.on').animate({
                    'left':'-1920px'
                },1000,function(){
                    $(this).removeClass('on')
                    $(this).hide()
                })
                $('.visual_list li:eq('+num+')').animate({
                    'left':'0px'
                },1000,function(){
                    $(this).addClass('on')
                })
            }

        })

        var sid=setInterval(visualroll,3000)
        function visualroll(){
           //$('.visual_btn a').trigger('click')
        }

        /* news */
        var number=1

        $('.n_rightBtn').on('click',function(e){
            e.preventDefault();
            number++
            if(number>2){
                number=0
                
            }
            $('.news_wrap li:visible').hide();
            $('.news_wrap li:eq('+(number-1)+')').show();
        })

        $('.n_leftBtn').on('click',function(e){
            e.preventDefault();
            number--
            if(number<0){
                number=2
            }
            $('.news_wrap li:visible').hide();
            $('.news_wrap li:eq('+(number-1)+')').show();
        })

        /* insta */
        var cover=0;
        var distance=0;
        $('.instabox').on({
            mouseenter:function(e){
                cover=e.pageX - $(this).offset().left;
               //console.log(position)
            },
            mouseleave:function(){
                cover=0;
                $('.insta_list').animate({
                    left:distance+'px'
                },100)
            },
            mousemove:function(e){
                var temp=e.pageX - $(this).offset().left;
                if(temp-cover > 0){
                    distance++;
                    if(distance > 0){
                        distance=0
                    }
                }else{
                    distance--;
                    if(distance < -220){
                        distance=0
                    }
                }
                $('.insta_list').css({
                    left:distance+'px'
                })
                cover=temp
            }
        })
    })
