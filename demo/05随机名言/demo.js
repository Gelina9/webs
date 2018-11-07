$(function(){
  //遍历当前窗口 不是最顶层返回true
  function inIframe () { try { return window.self !== window.top; } catch (e) { return true; } }
  var currentQuote="";
  var currentAuthor="";
  //获取随机名言的函数
  function getQuote(){
    $.ajax({
      
      //在js中引用api
      headers: {
      "X-Mashape-Key": "UNTovLuHD9mshJrZLaac7l4awfr3p1zPpc1jsnwF0CVYkK99K3",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success:function(r){
        if (typeof r === 'string') {
       r = JSON.parse(r); //解析字符串为js格式
      }
      currentQuote = r.quote;//得到名言
      currentAuthor = r.author;//得到作者
        if(inIframe()){   
          $(".fa-weibo").attr("href",'http://service.weibo.com/share/share.php?title='+ currentQuote);//以窗口是否为最顶层作为判断条件
        }
        function color(){ //随机获取颜色函数
   var r = Math.floor(Math.random()*255);
   var g = Math.floor(Math.random()*255);
   var b = Math.floor(Math.random()*255);
   return "rgba("+r+","+g+","+b+",0.8)"; 
  }
        $("body").css("background-color",color); 
 $("body").animate({"backgroundColor":color},1000);
        var cor=$("body").css("background-color");
        $("body").css("color",cor);
        $("#button").css("background",cor);
        $(".fa").css({"background":cor,
            "color":"white"});
        $(".word").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('.word').html(r.quote);
        });

        $("#writer").animate({
          opacity: 0
        }, 500,function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#writer').html(r.author);
        });
      }
      
    });
  }
  $(document).ready(function() {
  getQuote();
  $('#button').on('click', getQuote);
  $('.fa-weibo').on('click', function() {
    if(!inIframe()) { window.location.href='http://service.weibo.com/share/share.php?title='+currentQuote;//点击分享到微博
    }
  });
    $("footer a").attr("href","https://codepen.io/Gelina")
});
});