// 1.$
function $(v){
	if(typeof v==='function'){
		window.onload=v;
	}else if(typeof v==='string'){
		return document.getElementById(v);
	}else if(typeof v==='object'){
		return v;
	}
}


//2.getStyle
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
//3.doMove
function doMove(obj,attr,dir,target,endFn){
	
	dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=parseInt(getStyle(obj,attr))+dir;
		if(speed>target&&dir>0||speed<target&&dir<0){
			speed=target;
		}
		obj.style[attr]=speed+'px';	
		if(speed==target){
			clearInterval(obj.timer);
		endFn&&endFn();
		}
	},30);
}
//4.抖动****在js代码中要写下面这行****
var pos=parseInt(getStyle(obj,attr));
function shake(obj,attr,endFn){
    if(obj.timer) {return;}
    var arr=[];
    var num=0;
    var timer=null;

    for(var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(timer);
    timer=setInterval(function(){
        obj.style[attr]=pos+arr[num]+'px';
        num++;
        if(num==arr.length){
            clearInterval(timer);
            endFn&&endFn();
            obj.timer=null;
        }
    },40);
}