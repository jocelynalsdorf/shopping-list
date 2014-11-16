
$(document).ready(function() {
	
   $('button').click(function() {
	var textValue = $("#list-text-box").val();
     if (textValue ==="") {
       alert("enter an item");
     }
     else {
     	$("ul").append("<li class="shp-items"><i class="fa fa-square-o"></i><span>" + textValue + "</span><i class="fa fa-ban"></i></li>");
			}
	});

});

