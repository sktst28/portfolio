
     var num=0
     var currentNum=0
     var bannerImg=1192
     var popupImg=334

     /* visual-banner */
     function selectNum(number){
        number=num
        document.getElementById('visualList').style.left=-(bannerImg * num) + 'px'
        document.getElementById('visual_num').innerHTML = (num+1)
     }

     function prevBtn(){
        num--
        if(num<0){
            num=1
        }
        selectNum(num)
     }

     function nextBtn(){
        num++
        if(num>1){
            num=0
        }
        selectNum(num)
     }

     var auto=setInterval(rolling,3000)
     function rolling(){
        num++
        if(num>1){
            num=0
        }
        selectNum(num)
     }

     function stopBtn(){
         var stoprol=document.getElementById('btnwrap')
         console.log(stoprol)
         clearInterval(auto)
         bannerinit(stoprol)  
     }

     function bannerinit(stoprol){
        if( stoprol.className == "stopbtn") {
            stoprol.className = "playbtn"
        }else{
            clearInterval(auto)
            auto=setInterval(rolling,3000)
            stoprol.className = "stopbtn"
        }
        
      }

     /* 알림창 */
	
     function popupprevBtn(){
        num--
        if(num<0){
            num=2   
        }
        document.getElementById('popup_list').style.left=-(popupImg * num) + 'px'
		
         document.getElementById('popup_control').innerHTML = (num+1)
		     
		
     }

     function popupnextBtn(){
        num++
        if(num>2){
            num=0
        }
        document.getElementById('popup_list').style.left=-(popupImg * num) + 'px'
		 document.getElementById('popup_control').innerHTML = (num+1)
     }


     


     /* 공지사항 */
     function init(){
         var noticeh3=document.getElementById('notice_list').getElementsByTagName('h3')
         var noticeUl=document.getElementsByClassName('contents')
         var num=0
         for(var i=0; i<noticeUl.length; i++){
            noticeh3[i].num=i
            noticeh3[i].onclick=function(){
                if(currentNum!=this.num){
                    noticeh3[currentNum].className="";
                    noticeh3[this.num].className="ntc_on";
                    noticeUl[currentNum].className="contents"
                    noticeUl[this.num].className="contents on"

                    currentNum=this.num
                }
            }
         }
     }
     

/*사용자별 탭*/
var currentNums=0;
function dltab(){
    var noticedt=document.getElementsByClassName('tab_title')
    var noticedd=document.getElementsByClassName('tab_area')
    var nums=0
    for(var i=0; i<noticedd.length; i++){
       noticedt[i].nums=i
       noticedt[i].onclick=function(){
           if(currentNums!=this.nums){
            noticedt[currentNums].className="tab_title";
            noticedt[this.nums].className="tab_title on";
            noticedd[currentNums].className="tab_area"
            noticedd[this.nums].className="tab_area on"

               currentNums=this.nums
               
           }
       }
    }
}





    var fcountNum=0;

    function familyMenu(numb){
        if(fcountNum!=numb){
            familylili[numb].className="footer_list"
            familylili[fcountNum].className="footer_list off"
            fcountNum=numb
        }
        

    }
    var familyUls=document.getElementsByClassName('footer_btn');
    var familyli=document.getElementsByClassName('footer_group');

    var familylili=document.getElementsByClassName('footer_list');
    function fminit(){
        
        for(var i=0; i<familyli.length; i++){
            familyli[i].numb=i;
            familyli[i].onmouseover=function(){
                familyMenu(this.numb)
                 
            }

            familyli[i].onmouseout=function(){   
                console.log('a')
                familylili[fcountNum].className="footer_list off"
            }
            
        }
       

    }


    