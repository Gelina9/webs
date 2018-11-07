/*应用程序的启动入口页*/

//加载express模块
var express=require("express");
//加载模板处理模块
var swig=require("swig");
//加载数据库模块
var mongoose=require("mongoose");
//创建app应用=>nodejs中Http.createServer();
var app=express();
//设置静态文件托管
//当用户访问的url以/public开始，那么返回对应目录的文件
app.use("/public",express.static(__dirname+"/public"));

/*配置应用模板*/
//定义当前应用所使用的模板引擎，第一个参数：模板引擎的名称，也是模板文件的后缀；第二个参数用于解析处理模板内容的方法
app.engine("html",swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views，第二个参数是目录
app.set("views","./views");
//注册所使用的模板引擎，第一个参数必须是view engine，第二个参数是和这个方法中定义的模板引擎的名称必须是一致的
app.set("view engine","html");
//开发时候需要取消模板缓存
swig.setDefaults({cache:false});

/**
 * 根据不同功能划分模块
 * */
app.use("/admin",require("./routers/admin"));
app.use("/api",require("./routers/api"));
app.use("/",require("./routers/main"));
//监听http请求
mongoose.connect("mongodb://localhost:27018/blog",function(err){
    if(err){
        console.log("数据库连接失败！");
    }else{
        console.log("数据库连接成功！");
        app.listen(8080);
    }
});


