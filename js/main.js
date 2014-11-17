
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
  alert('Do stuff here!');
});

$(".shp-items").mouseenter(function() {
		
		$(".fa.fa-ban").show();
	})
	.mouseleave(function() {
		$(".fa.fa-ban").hide();
		
	})            

});

