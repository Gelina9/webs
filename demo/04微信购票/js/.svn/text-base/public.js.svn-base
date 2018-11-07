// JavaScript Document
$(document).ready(function(e) {
	/*$(".item_icon").click(function(){
		$(this).parents().next(".bill_term").toggle();
	})*/
	document.body.addEventListener('touchstart', function () {});
});
function page_height(){
	var pageHeight = window.innerHeight;
	var headHeight = $(".seat_head").innerHeight();
	var icoHeight = $(".seat .ico").innerHeight();
	var hallHeight = $(".seat .hall_name").innerHeight();
	$(".ui_wrapper").css({"height":pageHeight-headHeight-icoHeight-hallHeight});
}


//input删除按钮
//输入框
$("input").bind('input propertychange',function(){
	if($(this).val().length > 1){
		$(this).nextAll(".ion-close-circled").show();
	}
	if($(this).val().length < 1){
		$(this).nextAll(".ion-close-circled").hide();
	}
});
$(".ion-close-circled").bind('click',function(){
	$(this).hide();
	$(this).prev('input').val('');;
})