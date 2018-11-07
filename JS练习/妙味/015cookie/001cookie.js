/**
 * Created by Won_Gyeol on 2017/6/25.
 */
//封装cookie函数
function setCookie(name,value,iDay){
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay);
    document.cookie=name+"="+value+";expires="+oDate;
}
//取出所需的cookie值
function getCookie(name){
    //"use=12345"; "username=1234"
    var arr=document.cookie.split("; ");
    //arr->"["use=12345","username=1234"]
    var i=0;
    for(i=0;i<arr.length;i++){
        var arr2=arr[i].split("=");
        //arr2->["user","12345"]
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return "";
}

//删除cookie
function delCookie(name){
    setCookie(name,"1",-1);     //昨天过期
}