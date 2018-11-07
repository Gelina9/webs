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

//获取下一个元素节点
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
//改变样式
function styleHSibling(){
    var h=document.getElementsByTagName("h1");
    var elem;
    for(var i=0;i<h.length;i++){
        elem=getNextElement(h[i].nextSibling);
        elem.style.fontWeight="bold";
        elem.style.fontSize="1.2em";
    }
}
//页面加载完毕执行
addLoadEvent(styleHSibling);