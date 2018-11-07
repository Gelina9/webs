//表单验证
submitHandler:function(form){
    alert("验证成功，准备提交……");
},
//提示错误的文本
showErrors:function(errorMap,errorList){
    var errors=this.numberOfInvalids();
    if(errors>0){
        $("#reg").dialog("option","height",errors*20+340);//防止出现滚动条，使高度根据错误提示的数量自动变化
    }else{
        $("#reg").dialog("option","height",340);
    }
    this.defaultShowErrors();
},

//input输入边框：错误高亮显示，正确去掉高亮
highlight:function(element,errorClass){
    $(element).css("border","1px solid #630");
},
unhighlight:function(element,errorClass){
    $(element).css("border","1px solid #ccc");
    $(element).parent().find("span").html("&nbsp").addClass("succ");//把红色*换成绿色√
},
errorLabelContainer:"ol.reg_error",
    Wrapper:"li",//把错误提示放入li里