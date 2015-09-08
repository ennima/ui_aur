
if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length >>> 0;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

var alertFallback = true;
   if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     if (alertFallback) {
         console.log = function(msg) {
              alert(msg);
         };
     } else {
         console.log = function() {};
     }
   }







var left_list = [];
var left_list_tmp = [];
var right_list = [];
var right_list_tmp = [];

$(document).ready(function(){
	////console.log("Corriendo...");
	

});
function llenaLista(lista,array,tmp_array){
	//console.log("###llenaLista");
	lista.html("");
	/*array.forEach(function(entry){
		
	});*/
	for(i = 0; i < array.length; i++){
		oldHtml = lista.html();
		newHtml = oldHtml + '<div class="list_item"><p>'+array[i]+'</p></div>';
		lista.html(newHtml);
	}
	return array;
}
left_list = ["UVA","PERA","MANZANA","PLATANO","SANDIA","MELON","PAPAYA"];
left_list_tmp = llenaLista($(".left_list"), left_list);
//console.log("left_list: "+left_list);
left_list =[];
refresh_events_lists();
//console.log("left_list_tmp: "+left_list_tmp);
/*left_list.forEach(function(entry){
	//console.log(entry);
	oldHtml = $(".left_list").html();
	newHtml = oldHtml + '<div class="list_item"><p>'+entry+'</p></div>';
	$(".left_list").html(newHtml);
});
left_list = [];*/

function refresh_events_lists(){
	//console.log("refresh events")
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
			right_list_tmp.splice(right_list_tmp.indexOf(valor),1);
			//console.log("right_list: "+right_list);
			//console.log("right_list_tmp: "+right_list_tmp);
		}

	});

	$(".left_list .list_item").click(function(){
		$(this).toggleClass('list_item_selected');
		valor = $(this).text();
		////console.log(valor);
		if(left_list.indexOf(valor)!=-1){
			//console.log("Existe en: "+left_list.indexOf(valor));
			left_list.splice(left_list.indexOf(valor),1);
			//console.log("left_list: "+left_list);
		}else{
			//console.log("Agrega");
			left_list.push(valor);
			//console.log("left_list: "+left_list);
			left_list_tmp.splice(left_list_tmp.indexOf(valor),1);
			//console.log("left_list: "+left_list);
			//console.log("left_list_tmp: "+left_list_tmp);
		}

	});
}





$("#toRight_btn").click(function(){
	//valida que no este selccionado algo en el otro lado
	if(right_list.length>0){
		tmp_list =right_list_tmp.concat(right_list);
		right_list_tmp = tmp_list;
		right_list =[];
		$(".right_list .list_item").removeClass('list_item_selected');
	}
	if(left_list.length>0){
		////console.log("Subir archivos a stratus");
		tmp_list = right_list_tmp.concat(left_list);
		//console.log("tmp_list: "+tmp_list);
		right_list_tmp = tmp_list;
		////console.log(right_list);
		left_list = [];
		
		right_list_tmp = llenaLista($(".right_list"),right_list_tmp);
		left_list_tmp = llenaLista($(".left_list"),left_list_tmp);
		right_list = [];
		refresh_events_lists();
		console.log("right_list_tmp: ",right_list_tmp);
		console.log("right_list: ", right_list);
		console.log("left_list_tmp: ",left_list_tmp);
		console.log("left_list: "+left_list);

	}
	
});

$("#toLeft_btn").click(function(){
	//valida que no este selccionado algo en el otro lado
	if(left_list.length>0){
		tmp_list =left_list_tmp.concat(left_list);
		left_list_tmp = tmp_list;
		left_list =[];
		$(".left_list .list_item").removeClass('list_item_selected');
	}

	if(right_list.length>0)
	{////console.log("Subir archivos a stratus");
		tmp_list = left_list_tmp.concat(right_list);
		//console.log("tmp_list: "+tmp_list);
		left_list_tmp = tmp_list;
		////console.log(right_list);
		right_list = [];
		
		right_list_tmp = llenaLista($(".right_list"),right_list_tmp);
		left_list_tmp = llenaLista($(".left_list"),left_list_tmp);
		left_list = [];
		refresh_events_lists();
		console.log("right_list_tmp: ",right_list_tmp);
		console.log("right_list: ", right_list);
		console.log("left_list_tmp: ",left_list_tmp);
		console.log("left_list: "+left_list);
	}

});

$("#mover_btn").click(function(){
	console.log("moviendo...");
	console.log();
});