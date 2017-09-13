$(function(){
	$('#water2').eraser({size: 100});
});

function remove(event) {
	$("#water2").eraser('clear');
	event.preventDefault();
}

function reset(event) {
	$("#water2").eraser('reset');
	event.preventDefault();
}