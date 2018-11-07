/**
 * Created by Won_Gyeol on 2016/11/19.
 */
$(function(){
    //var box = $("div").css(["color","height","width"]);
    /*for(var i in box){
        alert(i+":"+box[i]);
    }*/

    /*$.each(box,function(attr,value){
        alert(attr+":"+value);
    });*/       //each遍历原生态的对象数组

    /*$("div").each(function(index,element){
        alert(index+":"+element);
    })*/        //each遍历jQuery的对象数组


    /*$("div").css({
        "color":'blue',
        "background-color":'yellow',
        "height":"30px"
    });*/

    //alert($("div").css("width"));
    /*$("div").css("width",function(index,value){
        //局部操作 通过计算返回
        return parseInt(value) - 500+"px";
    })*/

    //$("div").addClass("red bg size");

    /*click点击切换功能，默认样式和制定样式的切换*/
    /*var count=0;
    $("div").click(function(){
        $(this).toggleClass("red size" ,count++%3==0);//点三次变化
    })*/

    /*指定样式1和样式2的切换*/
    /*$("div").click(function(){
        $(this).toggleClass("red");
        if($(this).hasClass("red")){
            $(this).removeClass("green");
        }else{
            $(this).addClass("green");
        }
    })*/

    $("div").click(function(){
        $(this).toggleClass(function(){
            return $(this).hasClass("red")?"green":"red";
        });

    })
});
