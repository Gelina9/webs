/**
 * Created by Won_Gyeol on 2016/11/20.
 */
$(function(){
    //$("div").wrap("<strong class='abc'>123</strong>");//包裹
    //$("div").wrap("<strong/>");
    //$("div").wrap($("strong").get(0));
    //$("div").wrap(document.createElement("strong"));
    /*$("div").wrap(function(index){
        return "<strong>"+index+"</strong>";
    })*/

    /*$("div").click(function(){
        alert("ycku.com");
    });
    $("div").clone(true).appendTo("body");//复制节点 clone为true连点击事件一起复制
    */
    //$("div strong").remove('strong');//不保留行为
    //$("div strong").detach('strong');//保留行为
    //$("div").empty();//清空节点

    //$("div").replaceWith("<span>DOM</span>");//替换节点
    $("<span>DOM</span>").replaceAll("div");

});

