/**
 * Created by Won_Gyeol on 2016/11/19.
 */
$(function(){
    //alert($("div").width());
    //alert($(window).width());
    //alert($(document).width());

    //$("div").width(500);
    /*$("div").width(function(index,width){
        return width-500+"px";//虽然可以不用加上px，还是建议加上px
    });*/


    /*                                 //padding,border,margin
    alert($("div").width());            //200     200     200
    alert($("div").innerWidth());       //300     300     300
    alert($("div").outerWidth());       //300     420     420
    alert($("div").outerWidth(true));   //300     420     570  true表示支持外边距
*/

    //alert($("div").offset().top);
    //alert($("strong").offset().top);
    //alert($("strong").position().top);

    //alert($(window).scrollTop());//滚动条的高度
    //$(window).scrollTop(100);//设置滚动条高度
});
