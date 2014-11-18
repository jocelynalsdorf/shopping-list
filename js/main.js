
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
 $(this).parent().addClass("highlighted");
 $(this).remove();
 
});

$('.shp-list').on('click', '.fa.fa-check-square-o', function() {
 var checkedTwo = $("<i class=\"fa fa-square-o\"></i>");
 $(this).after(checkedTwo);
  $(this).parent().removeClass("highlighted");
 $(this).remove();

});

  $(".shp-list").on("mouseenter", ".shp-items", function() {
	$(this).children(".fa.fa-ban").show();
});

$(".shp-list").on("mouseleave", ".shp-items", function() {
	$(this).children(".fa.fa-ban").hide();
});         

});

