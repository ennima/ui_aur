


var left_list = [];
var right_list = [];

$(document).ready(function(){
	//console.log("Corriendo...");
	

});
function llenaLista(lista,array){
	console.log("###llenaLista");
	lista.html("");
	/*array.forEach(function(entry){
		
	});*/
	for(i = 0; i < array.length; i++){
		oldHtml = lista.html();
		newHtml = oldHtml + '<div class="list_item"><p>'+array[i]+'</p></div>';
		lista.html(newHtml);
	}
}
left_list = ["UVA","PERA","MANZANA","PLATANO","SANDIA","MELON","PAPAYA"];
llenaLista($(".left_list"), left_list);
left_list =[];
refresh_events_lists();
/*left_list.forEach(function(entry){
	//console.log(entry);
	oldHtml = $(".left_list").html();
	newHtml = oldHtml + '<div class="list_item"><p>'+entry+'</p></div>';
	$(".left_list").html(newHtml);
});
left_list = [];*/

function refresh_events_lists(){
	console.log("refresh events")
	$(".right_list .list_item").click(function(){
		$(this).toggleClass('list_item_selected');
		valor = $(this).text();
		//console.log(valor);
		if(right_list.indexOf(valor)!=-1){
			//console.log("Existe en: "+right_list.indexOf(valor));
			right_list.splice(right_list.indexOf(valor),1);
			//console.log("right_list: "+right_list);
		}else{
			//console.log("Agrega");
			right_list.push(valor);
			//console.log("right_list: "+right_list);
		}

	});

	$(".left_list .list_item").click(function(){
		$(this).toggleClass('list_item_selected');
		valor = $(this).text();
		//console.log(valor);
		if(left_list.indexOf(valor)!=-1){
			//console.log("Existe en: "+left_list.indexOf(valor));
			left_list.splice(left_list.indexOf(valor),1);
			//console.log("left_list: "+left_list);
		}else{
			//console.log("Agrega");
			left_list.push(valor);
			//console.log("left_list: "+left_list);
		}

	});
}





$("#toRight_btn").click(function(){
	//console.log("Subir archivos a stratus");
	tmp_list = right_list.concat(left_list);
	
	right_list = tmp_list;
	//console.log(right_list);
	left_list = [];
	
	/*right_list.forEach(function(entry){
		//console.log(entry);
		oldHtml = $(".right_list").html();
		newHtml = oldHtml + '<div class="list_item list_item"><p>'+entry+'</p></div>';
		$(".right_list").html(newHtml);
	});*/
	llenaLista($(".right_list"),right_list);
	refresh_events_lists();
});