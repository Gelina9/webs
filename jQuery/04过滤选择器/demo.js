/**
 * Created by Won_Gyeol on 2016/11/18.
 */
$(function(){
    //$("li:first").css("background","#ccc");
    //$("li").first().css("background","#ccc");//等同的方法
    //$("li:last").css("background","#ffc");//last也有等同的方法
    //$("ul:first li:last").css("background","#77c");
    //$("li:not(.red)").css("background","#ccc");//也有等同的方法
    //$("li:even").css("background","#ccc");
    //$("li:odd").css("background","#ccc");
    //$("li:eq(2)").css("background","#ccc");//也有等同的方法
    //$("li:eq(-2)").css("background","#ccc");
    //$("li:gt(2)").css("background","#ccc");
    //$("li:lt(2)").css("background","#ccc");
    //$("div :header").css("background","#ccc");//此处div后边必须加空格
    /*$(":input").get(0).focus();
    $(":input").css("background","#ffc");*/

    //$("div:contains('ycku.com')").css("background","#77c");
    //$("div:empty").css("background","#77c").css("height","20px");
    //$("ul:has(.red)").css("background","#ccc");
    //$("div:parent").css("background","#ccc");
    /*alert($(".red").is("li"));*/
    /*alert($('.red').is(function(){
        //alert($(this).get(0));
        //return $(this).attr("title")=="列表3";
        //return $(this).eq(3).attr("class")=="red";
    }));*/
    //必须使用$(this)来表示要判断的元素，否则，不管function里面是否返回true或false都和调用的元素无关了


    //alert($("li").eq(2).hasClass("red"));

    //$("li").slice(2,6).css("background","#ccc");
    //$("li").slice(5).css("background","#ccc");
    //$("li").slice(2,-2).css("background","#ccc");

    //alert($("#box").find("li").end().get(0));
    //alert($("#box").find("li").parent().get(0));
    //$("#box").next("ul").end().css("background","#ccc");

    //$("li").filter(".red,:first,:last").css("background","#ccc");//可以拼凑，灵活性比较高
    /*$("li").filter(function(){
        return $(this).attr("class")=="red"&&$(this).attr("title")=="列表3";
    }).css("background","#ccc");*/
});
