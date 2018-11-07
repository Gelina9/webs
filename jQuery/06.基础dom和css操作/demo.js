/**
 * Created by Won_Gyeol on 2016/11/19.
 */
$(function(){
    //alert($("#box").html());
    //alert($("#box").text());//获取的是文本，有html会自动清理
    //$("#box").html("<em>www.li.cc</em>");//替换HTML内容
    //$("#box").text("<em>www.li.cc</em>");//替换文本内容，有HTML会自动转义
    //alert($("input").val());
    //$("input").val("北风网");

    //$("input").val(["男","女","编程"]);//value值将被选定

    //alert($('#box').attr("id"));
    //$("div").attr("title","我是域名");
    /*$("div").attr({
        "title":"我是域名",
        "class":"red",      //class不建议使用attr设置
        "data":'123'
    });*/

    /*$("div").attr("title",function(index,value){
        return "原来的title是："+value+"现在的title是：我是"+index+"号域名";
    })*/

    //$("div").removeAttr("title");//这个方法不能传递function
});
