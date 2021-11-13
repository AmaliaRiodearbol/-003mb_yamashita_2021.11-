$(function(){
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	var d = now.getDate();
	$('.clock-solid .time').text(y + '/' + m + '/' + d )
});