$(function(){
	$('#waves2').eraser({size: 100});
});

function remove(event) {
	$("#waves2").eraser('clear');
	event.preventDefault();
}

function reset(event) {
	$("#waves2").eraser('reset');
	event.preventDefault();
}