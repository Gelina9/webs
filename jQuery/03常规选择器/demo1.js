/**
 * Created by Won_Gyeol on 2016/11/17.
 */

$(function(){
    //$("div,p,strong").css("color","green");//群组选择器
    //$("ul li a").css("color","orange");//后代选择器
    $("*").css("color","green");//通配符

    //alert($("*").length);
    //alert($("*")[0].nodeName);
    //在全局范围内使用*号，会极大地消耗资源，不建议在全局范围内使用

    //$("body *").css("color","blue");//一般使用在局部
   // $("div.box").css("color","orange");
    $(".box.pox").css("color","orange");
});



