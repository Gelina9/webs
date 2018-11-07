/**
 * Created by Won_Gyeol on 2016/11/20.
 */
$(function(){
    $("#search_button").button({
        icons:{
            primary: 'ui-icon-search'//搜索小图标
        }
    });

    //对话框
    $("#reg").dialog({
        autoOpen:true,
        modal:true,/*外部其他不可操作*/
        width:320,
        height:340,
        resizable:false,//不可缩放
        show:'puff',/*对话框显示效果*/
        closeText:"关闭",
        buttons:{
            "提交":function(){
                $(this).submit();
            }
        }
    }).buttonset().validate(
    {
        rules: {
            user: {
                required: true,
                minlength: 6
            },
            pass: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            }
        },
        messages:{
            user:{
                required:"帐号不得为空！",
                minlength: $.validator.format("帐号不得小于{0}位!")
            },
            pass:{
                required:"密码不得为空！",
                minlength: $.validator.format("密码不得小于{0}位!")
            },
            email:{
                required:"邮箱不得为空！",
                email: "请输入正确格式的电子邮件！"
            }
        }
    });

    $("#reg p:nth-of-type(4) label span").remove();//去掉默认样式里性别前面的实心圆点

    //UI日历插件
    $("#date").datepicker({
        dateFormat:"yy-mm-dd",
        dayNamesMin:["日","一","二","三","四","五","六"],
        monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
        showOtherMonths:true,
        selectOtherMonths:false, //前后月份是否可选
        changeMonth:true,
        changeYear:true,
        showButtonPanel:true,
        closeText:"关闭",
        currentText:"今天",
        maxDate:0,//生日只能是当前天以前
        yearRange:"1900:2020"
    });

    //input里title的提示
    /*$("#reg input[title]").tooltip({
        show:false,
        hide:false,
        position:{
            my:"left+5 center",
            at:"right center"//at是以my为基准的
        }
    });*/

    //邮箱自动补全
    $("#email").autocomplete({
        delay:0,
        autoFocus:true,
        source:function(request,response){
            var hosts = ['qq.com','163.com','gmail.com','sina.com.cn','126.com'],
                term = request.term,//获取用户输入的内容
                name = term,//邮箱的用户名
                host = '',//邮箱的域名
                ix = term.indexOf('@'),//@的位置
                result = [];

            result.push(term);
            //当有@的时候重新分配域名和用户名
            if(ix>-1){
                name = term.slice(0,ix);
                host = term.slice(ix+1);
            }
            if(name){
                //如果用户已经输入@和后面的域名
                // 那么就找到相关的域名提示，比如xxx@1，就提示xxx@163.com
                //如果未输入@和后面的域名，就把所有的都提示出来
                var findedHosts = (host ? $.grep(hosts,function(value,index){
                    return value.indexOf(host) > -1}) : hosts);//如果host有值，则得到function…，否则得到hosts
                var findedResult = $.map(findedHosts,function(value,index){
                    return name + '@' + value;
                });
                result = result.concat(findedResult);
            }
            response(result);
        }
    });
});
