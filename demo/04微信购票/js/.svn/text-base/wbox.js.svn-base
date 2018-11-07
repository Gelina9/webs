 function win(obj){
	var widthValue = screen.availWidth;
	var heightValue = window.innerHeight;
	$("body").append("<div class='dialog_mask'></div>");
	$("body").append("<div class='dialog'></div>");
	$(".dialog_mask").height(heightValue);
	document.body.style.overflow = "hidden";
	$(".dialog").width(obj.width);
	$(".dialog").height(obj.height);
	var wboxTop = ($(window).height() - $('.dialog').height())/2;
	var wboxLeft = ($(window).width() - $('.dialog').width())/2;
	$(".dialog").css({"top":wboxTop,"left":wboxLeft});
	$(".dialog").append("<div class='dialog_nav'></div>");
	$(".dialog_nav").append("<span class='dialog_title'></span>");
	$(".dialog_title").html(obj.title);
	$(".dialog_nav").append("<a href='#' class='dialog_close' onclick='cancelWin()'>×</a>");
	$(".dialog").append("<div class='dialog_info'></div>");
	$(".dialog").append("<div class='dialog_console'></div>");
	$(".dialog_info").append('<iframe></iframe>');
	$("iframe").attr("src",obj.target)
	
	/* 判断类型 */
	if(obj.types == "success"){
		$(".dialog_console").append("<a class='console_btn_confirm' href='#' onclick='cancelWin()'>确定</a>");
	}
	else if (obj.types == "alert"){
		$(".dialog_console").append("<a class='console_btn_confirm' href='#' onclick='cancelWin()'>确定</a>");
		$(".dialog_console").append("<a class='console_btn_cancel' href='#'>取消</a>");
	}
	else if (obj.types == "ask"){
		$(".dialog_console").append("<a class='console_btn_confirm' href='#' onclick='ask()'>确定</a>");
		$(".dialog_console").append("<a class='console_btn_cancel' href='#'>取消</a>");
		$(".dialog_info").append("<p class='dialog_info_msg'></p>");
		$(".dialog_info_msg").append(obj.askMsg);
	}
	else if(obj.types == "sure"){
		$(".dialog_console").append("<a class='console_btn_confirm' href='#' onclick='cancelWin()'>确定</a>");
		$(".dialog_console").append("<a class='console_btn_cancel' href='#'>取消</a>");
		$(".dialog").width(obj.askWidth);
		$(".dialog").height(obj.askHeight);
		var wboxTop = ($(window).height() - $('.dialog').height())/2;
		var wboxLeft = ($(window).width() - $('.dialog').width())/2;
		$(".dialog").css({"top":wboxTop,"left":wboxLeft});
		$(".dialog_info").append("<p class='dialog_info_msg'></p>");
		$(".dialog_info_msg").append(obj.msg);
		obj.msg
	}
	else if (obj.types == "error"){
		$(".dialog_console").append("<a class='console_btn_confirm' href='#' onclick='cancelWin()'>确定</a>");
		$(".dialog_info").append("<p class='dialog_info_msg'></p>");
		$(".dialog_info_msg").append(obj.errorMsg);
	}
	/* 内容区高度 */
	$(".dialog_info").height($('.dialog').height() - ($('.dialog_nav').height() + $('.dialog_console').height() + 20));
}
function cancelWin(){
	$(".dialog_mask").remove();
	$(".dialog").remove();
	document.body.style.overflow = "auto";
	return false;
}
function ask(){
	cancelWin();

	/*确定删除*/
	function ask_wbox(funs){
		var defaultes = {
			types : "sure"
        };
		var opt = $.extend(defaultes);
		funs(opt);
	}
	ask_wbox(win);
}

function ui_loading(obj1){
	var widthValue = screen.availWidth;
	var heightValue = window.innerHeight;
	$("body").append("<div class='dialog_mask'></div>");
	$("body").append("<div class='dialog_tips'></div>");
	$(".mask").height(heightValue);
	document.body.style.overflow = "hidden";
	$(".dialog_tips").width(obj1.width);
	$(".dialog_tips").height(obj1.height);
	var wboxTop = ($(window).height() - $('.dialog_tips').height())/2;
	var wboxLeft = ($(window).width() - $('.dialog_tips').width())/2;
	$(".dialog_tips").css({"top":wboxTop,"left":wboxLeft});
	var seconds = obj1.seconds;
	self.setInterval("ui_close()",seconds)
}

function ui_close(){
	$(".dialog_mask").remove();
	$(".dialog_tips").remove();
	document.body.style.overflow = "auto";
	return false;
}