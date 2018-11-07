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
//--------------------------------------------------------------------------
//显示缩略语列表函数
function displayAbbr(){
    check();
    //取得所有缩略词
    var abbr=document.getElementsByTagName("abbr");
    if(abbr.length<1){return false;}
    var defs=new Array();
    //遍历所有缩略词
    for(var i=0;i<abbr.length;i++){
        if(abbr[i].childNodes.length<1){ return false;} //因为ie不支持abbr
        var def=abbr[i].getAttribute("title");
        var key=abbr[i].lastChild.nodeValue;
        defs[key]=def; //将key作为数组下标
    }
    //建表
    var dl=document.createElement("dl");
    for(key in defs){
        var def=defs[key];

        var dt=document.createElement("dt");
        var dd=document.createElement("dd");
        var dt_text=document.createTextNode(key);
        var dd_text=document.createTextNode(def);
        dt.appendChild(dt_text);
        dd.appendChild(dd_text);
        dl.appendChild(dt);
        dl.appendChild(dd);
    }

    if(dl.childNodes.length<1){ return false;}
    //插入文档
    var h2=document.createElement("h2");
    var h_text=document.createTextNode("Abbreviations");
    h2.appendChild(h_text);
    document.body.appendChild(h2);
    document.body.appendChild(dl);
}

//显示文献来源链接函数
function displayCitations(){
    check();
    //取得所有引用
    var quotes=document.getElementsByTagName("blockquote");
    //遍历引用
    for(var i=0;i<quotes.length;i++){
        //如果没有cite属性，跳到下一次循环
        if(!quotes[i].getAttribute("cite")){ continue;}
        //保存cite属性
        var url=quotes[i].getAttribute("cite");
        // 得到quote[i]包含的所有元素节点
        var quoteChild=quotes[i].getElementsByTagName("*");
        if(quoteChild.length<1){continue;}
        //得到最后一个子元素节点
        var elem=quoteChild[quoteChild.length-1];
        //创建标记，相当于创建了<sup><a href=url>source</a></sup>
        var link=document.createElement("a");
        var link_text=document.createTextNode("sourse");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var sup=document.createElement("sup");
        sup.appendChild(link);
        //把标记添加到引用中的最后一个元素节点
        elem.appendChild(sup);
    }
}
//显示快捷键清单函数
function displayAccessKeys(){
    check();
    var links=document.getElementsByTagName("a");
    //创建一个数组保存访问键
    var akeys=new Array();
    for(var i=0;i<links.length;i++){
        if(!links[i].getAttribute("accesskey")){continue;}
        var acc=links[i].getAttribute("accesskey");
        var acc_text=links[i].lastChild.nodeValue;
        akeys[acc]=acc_text;
    }
    //创建列表
    var ul=document.createElement("ul");
    for(acc in akeys){
        var acc_text=akeys[acc];
        //放到列表项中的字符串
        var str=acc+"："+acc_text;
        //创建列表项
        var li=document.createElement("li");
        var li_text=document.createTextNode(str);
        li.appendChild(li_text);
        ul.appendChild(li);
    }
    //创建标题
    var h2=document.createElement("h2");
    var h_text=document.createTextNode("Accesskeys");
    h2.appendChild(h_text);
    //添加到文档
    document.body.appendChild(h2);
    document.body.appendChild(ul);
}
//页面加载时调用
addLoadEvent(displayAbbr);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);