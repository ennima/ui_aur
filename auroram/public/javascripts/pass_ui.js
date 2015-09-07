$(document).ready(function(){
	console.log("Corriendo...");
});

$(".list_item").click(function(){
	$(this).toggleClass('list_item_selected');
});