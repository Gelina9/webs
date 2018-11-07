/**
 * Created by Won_Gyeol on 2017/10/20.
 */
var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=550;
var REDIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;
//var endTime=new Date();
//endTime.setTime(endTime.getTime()+3600*1000);//距离当前时间向后推一个小时
var curShowTimeSeconds=0;
var balls=[];
var colors=["#FF4654","#FF8319","#FDD72B","#4FEA4A","#59D6E5","#1EB3FA","#A94AF1","#FF7BED","#5D58D7","#FFE381"];
window.onload=function(){
    /*屏幕自适应*/
    WINDOW_WIDTH=document.body.clientWidth;
    WINDOW_HEIGHT=document.body.clientHeight;
    MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);  //左边距占1/10宽度
    MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);
    REDIUS=Math.round(WINDOW_WIDTH*4/5/108)-1; //时钟占4/5宽度，108是108个(93+15)个(raduis+1)

    var canvas=document.getElementById("myCanvas");
    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;
    var context=canvas.getContext("2d");
    curShowTimeSeconds=getCurShowTimeSeconds();
    setInterval(function(){
        render(context);//绘制当前的画面
        update();//对整个画面进行调整更新
    },50)
}

/*计算当前显示时间的秒数*/
function getCurShowTimeSeconds(){
    var curTime=new Date();
    var ret=curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds();
    return ret;
}
/*实现倒计时的时间变化和小球变化*/
function update(){
    /*用nextShowTimeSeconds原因应该是在更新时间之前要干一些事情，要是不控制，
     直接用定时器来更新curShowTimeSeconds的话，不能确保在更新时间之前把需要做的事情做完*/
    var nextShowTimeSeconds=getCurShowTimeSeconds();
    var nextH=parseInt(nextShowTimeSeconds/3600);
    var nextMin=parseInt((nextShowTimeSeconds-nextH*3600)/60);
    var nextSec=nextShowTimeSeconds%60;

    var curH=parseInt(curShowTimeSeconds/3600);
    var curMin=parseInt((curShowTimeSeconds-curH*3600)/60);
    var curSec=curShowTimeSeconds%60;
    if(nextSec!=curSec){
        /*当时间改变，小球改变*/
        if(parseInt(curH/10)!=parseInt(nextH/10)){
            addBalls(MARGIN_LEFT+0,MARGIN_TOP,parseInt(curH/10));//参数分别是小时十位数的位置和相应的数字
        }
        if(parseInt(curH%10)!=parseInt(nextH%10)){
            addBalls(MARGIN_LEFT+15*(REDIUS+1),MARGIN_TOP,parseInt(curH%10));//参数分别是小时个位数的位置和相应的数字
        }
        if(parseInt(curMin/10)!=parseInt(nextMin/10)){
            addBalls(MARGIN_LEFT+39*(REDIUS+1),MARGIN_TOP,parseInt(curMin/10));//分钟
        }
        if(parseInt(curMin%10)!=parseInt(nextMin%10)){
            addBalls(MARGIN_LEFT+54*(REDIUS+1),MARGIN_TOP,parseInt(curMin%10));
        }
        if(parseInt(curSec/10)!=parseInt(nextSec/10)){
            addBalls(MARGIN_LEFT+78*(REDIUS+1),MARGIN_TOP,parseInt(curSec/10));//秒
        }
        if(parseInt(curSec%10)!=parseInt(nextSec%10)){
            addBalls(MARGIN_LEFT+93*(REDIUS+1),MARGIN_TOP,parseInt(curSec%10));
        }
        curShowTimeSeconds=nextShowTimeSeconds;
    }
    updateBalls();
}

/*使小球动起来*/
function updateBalls(){
    for(var i=0;i<balls.length;i++){ //遍历小球数组
        balls[i].x+=balls[i].vx;
        balls[i].y+=balls[i].vy;
        balls[i].vy+=balls[i].a;
        /*碰撞底边检测*/
        if(balls[i].y>=WINDOW_HEIGHT-REDIUS){ //如果碰到底边，另小球从底边向上弹
            balls[i].y=WINDOW_HEIGHT-REDIUS;
            balls[i].vy=-balls[i].vy*0.7;
        }
    }
    /*性能优化，跳出界面的小球，把它从数组删除*/
    var count=0;//计算有多少个小球留在画面中
    for(var i=0;i<balls.length;i++){  //判断是否在画面内
        if( balls[i].x+REDIUS > 0 && balls[i].x-REDIUS < WINDOW_WIDTH ){ //小球右边缘大于0并且小球本身左边缘小于画面宽度
            balls[count++]=balls[i];
        }
    }
    while(balls.length>Math.min(300,count)){ //当前数组里小球数量比count大，删除
        balls.pop();
    }
    console.log(count);
}
/*对点阵化添加彩色小球*/
function addBalls(x,y,num){
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                var aBall={
                    x:x+j*2*(REDIUS+1)+(REDIUS+1),//初始运动位置
                    y:y+i*2*(REDIUS+1)+(REDIUS+1),
                    a:1.5+Math.random(),//加速度在1.5~2.5之间
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,//初始x速度，结果为-4或+4
                    vy:-5,//取负值是为了有上抛的效果
                    color:colors[Math.floor(Math.random()*colors.length)] //0~9
                }
                balls.push(aBall);
            }
        }
    }
}
/*对点阵化的渲染绘制*/
function render(cxt){
    /*绘制时间点阵*/
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT); //对屏幕进行一次刷新操作，防止图像覆盖
    var h=parseInt(curShowTimeSeconds/3600);
    var min=parseInt((curShowTimeSeconds-h*3600)/60);
    var sec=curShowTimeSeconds%60;
    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(h/10),cxt); //小时
    renderDigit(MARGIN_LEFT+15*(REDIUS+1),MARGIN_TOP,parseInt(h%10),cxt);
    renderDigit(MARGIN_LEFT+30*(REDIUS+1),MARGIN_TOP,10,cxt);  //冒号，10表示digit的第10个，因为对应的形参是num
    renderDigit(MARGIN_LEFT+39*(REDIUS+1),MARGIN_TOP,parseInt(min/10),cxt); //分钟
    renderDigit(MARGIN_LEFT+54*(REDIUS+1),MARGIN_TOP,parseInt(min%10),cxt);
    renderDigit(MARGIN_LEFT+69*(REDIUS+1),MARGIN_TOP,10,cxt);  //冒号
    renderDigit(MARGIN_LEFT+78*(REDIUS+1),MARGIN_TOP,parseInt(sec/10),cxt); //秒
    renderDigit(MARGIN_LEFT+93*(REDIUS+1),MARGIN_TOP,parseInt(sec%10),cxt);
    /*绘制动画的小球*/
    for(var i=0;i<balls.length;i++){
        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,REDIUS,0,2*Math.PI,true);
        cxt.closePath();
        cxt.fill();
    }
}
function renderDigit(x,y,num,cxt){
    cxt.fillStyle="rgb(0,102,153)";
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(REDIUS+1)+(REDIUS+1),y+i*2*(REDIUS+1)+(REDIUS+1),REDIUS,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }

        }
    }
}