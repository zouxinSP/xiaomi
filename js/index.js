
    //导航showlist对象写法
  function Navlist() {
        this.img = [];
        this.title = [];
        this.price = [];

    }
    Navlist.prototype = {
        bindDom:function(){
            var str = '';
            str += '<ul class="show_list">'
            for(var i = 0; i < this.img.length; i++){
                str += '<li><img src="'+this.img[i]+'" alt=""><p>'+this.title[i]+'</p><p>'+this.price[i]+'</p></li>'
            }
            // str += '<li><img src="'+this.img[0]+'" alt=""><p>'+this.title+'</p><p>'+this.price+'</p></li>'
            // str += '<li><img src="'+this.img[1]+'" alt=""><p>'+this.title+'</p><p>'+this.price+'</p></li>'
            // str += '<li><img src="'+this.img[2]+'" alt=""><p>'+this.title+'</p><p>'+this.price+'</p></li>'
            // str += '<li><img src="'+this.img[3]+'" alt=""><p>'+this.title+'</p><p>'+this.price+'</p></li>'
            str += '</ul>'
            return str;
        },
        bindShowList:function(){
                //导航显示
            var nav_item = document.getElementsByClassName("nav_itemlist");
            var nav_list =  document.getElementsByClassName("show_list");
        
            for(let j =0; j< nav_item.length;j++){
                nav_item[j].onmouseover = function(){
                    
                    nav_list[j].style.display="block";
                    nav_list[j].style.height='210px';
                    nav_list[j].style.width='1226px';
                
                };
                nav_item[j].onmouseout = function(){
                    nav_list[j].style.display="none";
                    nav_list[j].style.height='0px';
                    nav_list[j].style.width='0px';
                    
                };
            }
        }
    }      


        //轮播posilit
        function LunboPosi(){
            this.img = [];
            this.title = [];
            this.btnvalue = '';
        }
        LunboPosi.prototype = {
            bindDom:function(){
                var str = '<ul class="posi2_list">';
                for(var i = 0; i < this.img.length; i++){
                    str += '<li><img src="'+this.img[i]+'" alt=""><p>'+this.title[i]+'</p><input type="text"'+'value='+'"'+this.btnvalue+'"'+'></li>'
                }
                str += '</ul>'
                return str;
            },
            bindShowList:function(){
                    //轮播定位显示
                    var posi_item = document.getElementsByClassName("posi_item");
                    var posi_list =  document.getElementsByClassName("posi2_list");

                    for(let z =0; z< posi_item.length;z++){
                        posi_item[z].onmouseover = function(){
                            
                            posi_list[z].style.display="block";
                        
                        };
                        posi_item[z].onmouseout = function(){
                            posi_list[z].style.display="none";
                            
                        };
                    }
            }

        }


var $ = function(id){return document.getElementById(id);}
    
    window.onload = function(){

          
        //导航初始化
        var NavLists = [
        {
            'img':['images/nav_menu1_1.jpg','images/nav_menu1_2.jpg','images/nav_menu1_3.jpg','images/nav_menu1_4.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元']},

        {'img':['images/nav_menu2_1.jpg','images/nav_menu2_2.jpg','images/nav_menu2_3.jpg','images/nav_menu2_4.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元']},

        {'img':['images/nav_menu3_1.jpg','images/nav_menu3_2.jpg','images/nav_menu1_3.jpg','images/nav_menu4_4.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元']},

        {'img':['images/nav_menu2_1.jpg','images/nav_menu2_2.jpg','images/nav_menu4_3.jpg','images/nav_menu2_4.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元']},

        {'img':['images/nav_menu1_1.jpg','images/nav_menu1_2.jpg','images/nav_menu1_3.jpg','images/nav_menu1_4.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元']},

        {'img':['images/nav_menu4_1.jpg','images/nav_menu4_2.jpg','images/nav_menu2_3.jpg','images/nav_menu4_4.jpg','images/nav_menu4_1.jpg','images/nav_menu2_1.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g','小米手机4g','手机4g'],'price':['919元','819元','719元','619元','919元','819元']},

        {'img':['images/nav_menu2_1.jpg','images/nav_menu1_2.jpg','images/nav_menu1_3.jpg','images/nav_menu1_4.jpg','images/nav_menu4_2.jpg','images/nav_menu2_3.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元','919元','819元']},

        {'img':['images/nav_menu4_1.jpg','images/nav_menu2_2.jpg','images/nav_menu4_3.jpg','images/nav_menu2_4.jpg','images/nav_menu2_3.jpg','images/nav_menu3_1.jpg'],
        'title':['小米手机4g','手机4g','小米4g','米机4g','小米4g','米机4g'],'price':['919元','819元','719元','619元','719元','619元']},
        ]

        var str = '';
        var navlist = new Navlist();
        for(var i = 0; i < NavLists.length; i++){       

            navlist.img = NavLists[i].img;
            navlist.title = NavLists[i].title;
            navlist.price = NavLists[i].price;
            str += navlist.bindDom();
        }

        var container = $("nav_show_list");
        container.innerHTML = str;
        navlist.bindShowList();



        //轮播定位列表初始化
        var posiLists = [
            {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/heyue.jpg","images/category/hongmi2.jpg","images/category/note.jpg",
                    "images/category/shb.jpg","images/category/tv40.jpg","images/category/tv49.jpg",
                    "images/category/tv60.jpg","images/category/hezis.jpg","images/category/minote.jpg",
                    "images/category/telcom.jpg","images/category/tvzj.jpg","images/category/zhongxin.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米','手机4g','小米4g','Note','4g手机','小米4g','小米Note','手机4g','4g小米','小米','手机4g','小米4g',],
            'btnvalue':'选购'},

            {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                      "images/category/shb.jpg","images/category/tv40.jpg","images/category/tv49.jpg",
                     "images/category/telcom.jpg","images/category/tvzj.jpg","images/category/zhongxin.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

            {'img':["images/category/heyue.jpg","images/category/hongmi2.jpg","images/category/note.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   "images/category/tv60.jpg","images/category/hezis.jpg","images/category/minote.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

            {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

             {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

             {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

             {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

            {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

            {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'},

             {'img':["images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                    "images/category/compare.jpg","images/category/dianshipeijian.jpg","images/category/diyinpao.jpg",
                   ],
            'title':['小米Note','手机4g','小米4g','小米Note','手机4g','小米4g','小米Note','手机4g','小米4g'],
            'btnvalue':'选购'}
        ]

        var str = '';
        var posiList = new LunboPosi();
        for(var i = 0; i < posiLists.length; i++){      

            posiList.img = posiLists[i].img;
            posiList.title = posiLists[i].title;
            posiList.btnvalue = posiLists[i].btnvalue;
            str += posiList.bindDom();
        }

        var posicontent = $("lunbo_posi2");
        posicontent.innerHTML = str;
        posiList.bindShowList();

         //轮播swiper组件
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
                 el: '.swiper-pagination',
                clickable :true,
            }
        });

        //showtips
        var li = document.getElementsByClassName("li-cls");
        var span = document.querySelectorAll(".container > ul > li > input");
        // console.log(span);
        // console.log(li[3]);

        for(let i =0; i< li.length;i++){
            li[i].onmouseover = function(){
                span[i].style.height='80px';
                span[i].style.width='234px';
                
            };
            li[i].onmouseout = function(){
             
                span[i].style.height='0px';
                span[i].style.width='0px';
                
            };
        }

        //遮罩层和登录框
        var loginI = $("loginI");
        var mask = $("mask");
        var login = $("login");
        var loginbtn = $('login-button');
        var close = $("close");
        loginI.onclick = function(){
            mask.style.display="block";
            login.style.display="block";
        }
        loginbtn.onclick = function(){
            mask.style.display="none";
            login.style.display="none";
        }
        close.onclick = function(){
            mask.style.display="none";
            login.style.display="none";
        }




    //     var contentval = $("chartContent");
    //     var closeChart = $("title");
    //     var chart = $("chart");
    //      closeChart.onclick = function(){    
    //             chart.style.display="none";
    //         }

    //     //ajax请求函数
    //     function ajax(option){
    //         var xhr = new XMLHttpRequest();
    //         if(option.type=='get'&&option.data){
    //             option.url+='?';
    //             option.url+=option.data;
    //             option.data=null;
    //         }
    //         xhr.open(option.type,option.url);
    //         if(option.type=='post'&&option.data){
    //             xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    //         }
    //         xhr.onreadystatechange = function(){
    //             if(xhr.readyState==4&&xhr.status==200){
    //                 var type = xhr.getResponseHeader('Content-Type');
    //                 if(type.indexOf('json') != -1){
    //                     option.success(JSON.parse(xhr.responseText));
    //                 }else if(type.indexOf('xml') != -1){
    //                     option.success(xhr.responseXML);
    //                 }else{
    //                     option.success(xhr.responseText);
    //                 }
    //             }
    //         }
    //         xhr.send(option.data);
    //     }
   
    // document.getElementById("click").onclick = function() {
        
    //     var input = document.getElementById("val");
    //      var saveme= input.value;
    //      // console.log(saveme);
     
    //     if(saveme !== ""){
            
    //     // console.log(saveme);
    //     var me = document.createElement("p");
    //     // me.style.width="280px";
    //     me.style.width="100%";
    //     me.style.background="pink"
    //     me.style.float = 'left';
    //     me.style.margin="5px 5px";
    //     me.innerHTML = '我:'+saveme;
    //     me.style.fontSize="16px";
    //     // console.log(me.innerHTML);
    //     contentval.appendChild(me);
    //     input.value="";
    //         ajax({
    //             url:'http://www.tuling123.com/openapi/api',
    //             type:'post',
    //             data:'key=363aef5c27974120b15acbb969c02dd2&userid=12345678&info='+saveme,
    //             success:function(data){

    //                 //创建节点存储响应信息设置样添进content里
    //                  var roob = document.createElement("r");
    //                     // roob.style.width="270";
    //                     roob.style.background="#ccc"
    //                     roob.style.float='right';
    //                     roob.style.textAlign="right";
    //                     roob.style.fontSize="16px";
    //                     roob.style.margin="0 5px";
    //                     // roob.style.bottom="10px";
    //                     roob.innerHTML = data.text+':小官';

    //                     contentval.appendChild(roob);
    //             }
    //         });
    //     }else{
    //         return 0;
    //     }
    // }
   

    }