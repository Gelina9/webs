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
//根据某个条件反复设置某种样式，此函数是设置表格斑马背景
function stripeTable(){
    check();
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                rows[j].style.backgroundColor="#ffc";
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}
addLoadEvent(stripeTable);