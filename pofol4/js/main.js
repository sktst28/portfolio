
$(document).ready(function(){
    /* toggle */
    $('.m_btn').on('click',function(){
        $('.toggle1').toggleClass('on')
        $('.toggle2').toggleClass('on')
        $('.header_').find($('.m_gnb')).toggleClass('on')
    })

    /* product */
    $('.leftBtn').on('click',function(e){
        e.preventDefault();
        $('.product_list').css({
            left:'310px'
        })
        $('.product_list').prepend($('.product_list li:last'))
        $('.product_list').css('left','0')
    })
    $('.rightBtn').on('click',function(e){
        e.preventDefault();
        $('.product_list').css({
            left:'-310px'
        })
        $('.product_list').append($('.product_list li:first'))
    })

    /* banr */
    // $('.banr_num li').each(function(index){
    //     $(this).on('click',function(e){
    //         e.preventDefault();
    //         var thisNum=index + 1;
    //         console.log(thisNum)
    //         $('.banr_img > li > a > img').attr({
    //             src:'images/sampleimg_'+thisNum+'.png'
    //         })
    //     })
    // })

    $('.banr_num li button').on('click',function(){
        
    })

    /* shop */
    var num=1;
    $('.s_leftBtn').on('click',function(e){
        e.preventDefault();
        num--;
        if(num<1){
            num=4
        }
        $('.store li:visible').hide();
        $('.store li:eq('+(num-1)+')').show()
    })

    $('.s_rightBtn').on('click',function(e){
        e.preventDefault();
        num--;
        if(num>4){
            num=1
        }
        $('.store li:visible').hide();
        $('.store li:eq('+(num-1)+')').show()
    })

    $('.m_tab').hide()
    $('.ft_btn').on('click',function(){
       $(this).toggleClass('on').next().slideToggle()
    })
    
})