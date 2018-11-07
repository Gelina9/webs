/**
 * Created by Won_Gyeol on 2016/11/17.
 */
$(function(){
    //alert($('#pang'));//返回jQuery对象
    //alert(document.getElementById("pang"));//返回原声dom对象
    //alert($("#pang").get(0));//通过jQuery返回原声的dom对象，0表示索引第一个div
    alert($(document.getElementById("pang")).css("color","red"));//jQuery对象和dom对象的互换
})
