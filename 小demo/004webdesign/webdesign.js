//共享onload函数
function addLoadEvent(fn){
    var oldOnload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=fn;
    }else{
        window.onload=function(){
            oldOnload();
            fn();
        }
    }
}
//检查兼容性函数
function check(){
    if(!document.getElementsByTagName){ return false;}
    if(!document.createElement){ return false;}
    if(!document.createTextNode){ return false;}
}

//动画函数
function moveElement(elementId,final_x,final_y,time){
    if(!document.getElementById){ return false;}
    if(!document.getElementById(elementId)){ return false;}
    var elem=document.getElementById(elementId);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+time+")";
    elem.movement=setTimeout(repeat,time);
}

//调用动画
function prepareSlideshow(){
    check();
    if(!document.getElementById("linklist")){ return false;}
    if(!document.getElementById("preview")){ return false;}
    var preview=document.getElementById("preview");
    //为图片应用样式
    preview.style.position="absolute";
    preview.style.left="0px";
    preview.style.top="0px";
    //取得列表中所有链接
    var list=document.getElementById("linklist");
    var links=document.getElementsByTagName("a");
    //为mouseover添加动画效果
    links[0].onmouseover=function(){
        moveElement("preview",-100,0,10);
    }
    links[1].onmouseover=function(){
        moveElement("preview",-200,0,10);
    }
    links[2].onmouseover=function(){
        moveElement("preview",-300,0,10);
    }
}
addLoadEvent(prepareSlideshow);