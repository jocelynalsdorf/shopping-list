
$(document).ready(function() {
	
    $('form').submit(function(event) {
     event.preventDefault();
	   var textValue = $("#list-text-box").val();
     if (textValue ==="") {
       alert("enter an item");
     }
     else {
     
     	$("ul").append("<li class=\"shp-items\"><i class=\"hide-element fa fa-square-o\"></i><span>" + textValue + "</span><i class=\"hide-element fa fa-ban\"></i></li>");
			}
	});
     

});

