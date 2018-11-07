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
    if(!document.getElementById){ return false;}
    if(!document.getElementsByTagName){ return false;}
    if(!document.createElement){ return false;}
    if(!document.createTextNode){ return false;}
}
//通用型函数 插在某节点之后
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
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
    if(xpos==final_x && ypos==final_y){
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
//添加class函数
function addClass(elem,val){
    if(!elem.className){
        elem.className=val;
    }else{
        newClassName=elem.className;
        newClassName+=" "+val;
        elem.className=newClassName;
    }
}
//---------------------------------------------------------------------------------

//当前链接高亮显示
function hightlightPage(){
    check();
    var headers=document.getElementsByTagName("header");
    if(headers.length==0){ return false;}
    var nav=headers[0].getElementsByTagName("nav");
    if(nav.length==0){ return false;}
    var links=document.getElementsByTagName("a");
    var linkUrl;
    for(var i=0;i<links.length;i++){
        linkUrl=links[i].getAttribute("href");
        if(window.location.href.indexOf(linkUrl)!=-1){
            links[i].className="here";
            //为每个页面的body设置对应的id，利用id为不同的页头设置背景
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
//第一页的动画效果
function prepareSlideshow(){
    check();
    //添加<div><img src="" alt=""></div>到id为intro的元素后边
    if(!document.getElementById("intro")){ return false;}
    var intro=document.getElementById("intro");
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview=document.createElement("img");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    preview.setAttribute("id","preview");
    preview.style.left="0";
    preview.style.top="0";
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);

    //动画
    var links=document.getElementsByTagName("a");
    var des;
    for(var i=0;i<links.length;i++){
        links[i].onmouseover=function(){
            des=this.getAttribute("href");
            if(des.indexOf("index.html")!=-1){
                moveElement("preview",0,0,5);
            }
            if(des.indexOf("about.html")!=-1){
                moveElement("preview",-150,0,5);
            }
            if(des.indexOf("photos.html")!=-1){
                moveElement("preview",-300,0,5);
            }
            if(des.indexOf("live.html")!=-1){
                moveElement("preview",-450,0,5);
            }
            if(des.indexOf("contact.html")!=-1){
                moveElement("preview",-600,0,5);
            }
        }
    }
}
//第二页的section显示
function showSection(id){
    var sections=document.getElementsByTagName("section");
    for(var i=0;i<sections.length;i++){
        if(sections[i].getAttribute("id")!=id){
            sections[i].style.display="none";
        }else{
            sections[i].style.display="block";
        }
    }
}
//调用第二页的section显示
function prepareShowSection(){
    check();
    var articles=document.getElementsByTagName("article");
    if(articles.length==0){ return false;}
    var navs=articles[0].getElementsByTagName("nav");
    if(navs.length==0){ return false;}
    var links=navs[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        //获取section的id
        var sectionId=links[i].getAttribute("href").split("#")[1];
        if(!document.getElementById(sectionId)){ continue;}
        document.getElementById(sectionId).style.display="none";
        links[i].sectionId=sectionId;
        links[i].onclick=function(){
            showSection(this.sectionId);
            return false;
        }
    }
}
//第三页的图片库

/*展示图片函数*/
function showPic(whichPic){
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichPic.getAttribute("title");
    var des=document.getElementById("description");
    des.firstChild.nodeValue=text;
    return true;
}
/*动态创建标记，占位图片和说明*/
function preparePlaceholder(){
    check();
    if(!document.getElementById("imagegallery")) {return false;}
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.gif");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desText=document.createTextNode("Choose an image");
    var gallery=document.getElementById("imagegallery");
    description.appendChild(desText);
    insertAfter(description,gallery);
    insertAfter(placeholder,description);
}

/*添加事件处理函数*/
function prepareGallery(){
    check();
    if(!document.getElementById("imagegallery")){return false;}
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this)?false:true;
        }
    }
}
//第四页的表格
//设置表格斑马背景
function stripeTable(){
    check();
    var tables=document.getElementsByTagName("table");
    var odd,rows;
    for(var i=0;i<tables.length;i++){
        odd=false;
        rows=tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd==true){
                addClass(rows[j],"odd");
                odd=false;
            }else{
                odd=true;
            }
        }
    }
}

//高亮显示
function highlightRows(){
    check();
    var rows=document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName=rows[i].className;
        rows[i].onmouseover=function(){
            addClass(this,"highlight");
        }
        rows[i].onmouseout=function(){
            this.className=this.oldClassName;
        }
    }
}
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
    var h3=document.createElement("h3");
    var h_text=document.createTextNode("Abbreviations");
    h3.appendChild(h_text);
    var articles=document.getElementsByTagName("article");
    if(articles.length==0){ return false;}
    articles[0].appendChild(h3);
    articles[0].appendChild(dl);
}
//第五页的表单
//获取焦点
function focusLabel(){
    check();
    var labels=document.getElementsByTagName("label");
    for(var i=0;i<labels.length;i++){
        if(!labels[i].getAttribute("for")){ continue;}
        labels[i].onclick=function(){
            var id=this.getAttribute("for");
            if(!document.getElementById(id)){ return false;}
            var element=document.getElementById(id);
            element.focus();
        }
    }
}
//占位文字
function resetFields(whichform){
    /*if(Modernizr.input.placeholder){return;}*/  //貌似不支持还是我不会用modernizr这个玩意儿？暂时放着
    for(var i=0;i<whichform.elements.length;i++){
        var element=whichform.elements[i];
        if(element.type=="submit"){ continue;}
        var check=element.placeholder||element.getAttribute("placeholder");
        if(!check){continue;}
        element.onfocus=function(){
            var text=this.placeholder||this.getAttribute("placeholder");
            if(this.value==text){
                this.className="";
                this.value="";
            }
        }
        element.onblur=function(){
            if(this.value==""){
                this.className="placeholder";
                this.value=this.placeholder||this.getAttribute("placeholder");
            }
        }
        element.onblur();
    }
}
//提交表单验证
function prepareForms(){
    //传入form对象调用resetFields函数
    for(var i=0;i<document.forms.length;i++){
        var thisForm=document.forms[i];
        resetFields(thisForm);
        //通过submit处理验证
        thisForm.onsubmit=function () {
            //如果表单没有通过验证，返回false
            if(!validateForm(this)){ return false;}
            var article=document.getElementsByTagName("article")[0];
            //如果成功发送ajax请求，会返回true，则让submit事件返回false，以便阻止重复提交表单
            if(submitAjax(this,article)){ return false;}
            //否则，说明ajax未成功，则让submit去处理
            return true;
        }
    }
}
//必填项
function isFilled(field){
    if(field.value.replace(" ","").length==0){ return false;}
    var placeholder=field.placeholder||field.getAttribute("placeholder");
    return (field.value!=placeholder);
}
//邮箱格式
function isEmail(field){
    return (field.value.indexOf("@")!=-1 && field.value.indexOf(".")!=-1);
}
//表单验证
function validateForm(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var element=whichform.elements[i];
        if(element.required){
            if(!isFilled(element)){
                alert("Please fill in the "+element.name+" field.");
                return false;
            }
        }else{
            continue;
        }
        /*if(element.type=="email"){
            if(!isEmail(element)){
                alert("The "+element.name+" field must be a vaild email address.");
                return false;
            }
        }  这块有点小bug*/
    }
    return true;
}
//ajax提交表单
function getHTTPObject(){
    if(typeof XMLHttpRequest=="undefined"){
        try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
            catch (e){}
        try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
            catch (e){}
        try{return new ActiveXObject("Msxml2.XMLHTTP");}
            catch (e){}
        return false;
    }
    return new XMLHttpRequest();
}
//创建一个加载图像
function displayAjaxLoad(elem){
    while(elem.hasChildNodes()){
        elem.removeChild(elem.lastChild);
    }
    var content=document.createElement("img");
    content.setAttribute("src","images/loading.gif");
    content.setAttribute("alt","loading");
    elem.appendChild(content);
}
//ajax提交
function submitAjax(whichform,target){
    var request=getHTTPObject();
    if(!request){ return false;}
    //显示加载图像
    displayAjaxLoad(target);
    //创建URL编码的表单数据字符串，即要提交的数据
    var dataPart=[];
    var elem;
    for(var i=0;i<whichform.length;i++){
        elem=whichform.elements[i];
        dataPart[i]=elem.name+"="+encodeURIComponent(elem.value);
    }
    var data=dataPart.join("&");
    //发送请求
    request.open("post",whichform.getAttribute("action"),true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //响应函数
    request.onreadystatechange=function(){
        if(request.readyState==4){
            if(request.status==200||request.status==0){
                var matches=request.responseText.match(/<article>([\s\S]+)<\/article>/);
                if(matches.length>0){
                    target.innerHTML=matches[1];
                }else{
                    target.innerHTML="<p>Oops,there was an error.Sorry.</p>";
                }
            }else{
                target.innerHTML="<p>"+request.statusText+"</p>";
            }
        }
    };
    //发送数据
    request.send(data);
    return true;
}
addLoadEvent(hightlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareShowSection);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(stripeTable);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbr);
addLoadEvent(focusLabel);
addLoadEvent(prepareForms);