
$(document).ready(function() {
	
    $('form').submit(function(event) {
     event.preventDefault();
	   var textValue = $("#list-text-box").val();
     if (textValue ==="") {
       alert("enter an item");
     }
     else {
     
     	$("ul").append("<li class=\"shp-items\"><i class=\"fa fa-square-o\"></i><span>" + textValue + "</span><i class=\"hide-element fa fa-ban\"></i></li>");
			}
	});
    
$('.shp-list').on('click', '.fa.fa-square-o', function() {
 var checked = $("<i class=\"fa fa-check-square-o\"></i>");
 $(this).after(checked);
 $("span").addClass("highlighted");
 $(this).remove();
});

$('.shp-list').on('click', '.fa.fa-check-square-o', function() {
 var checkedTwo = $("<i class=\"fa fa-square-o\"></i>");
 $(this).after(checkedTwo);
 $("span").removeClass("highlighted");
 $(this).remove();
});
         

});

