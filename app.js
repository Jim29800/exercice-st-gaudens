$(".logo").click(function(){
	location.reload();	
});


$("#link1").click(function(){
	alert("Execute Order 66")	
});

$("#link2").click(function(){
	alert("Je viens du nord et je suis l'empereur Palpainauchocolat")	
});

$("div.images > input").click(function(){
	$('.texte').html($(this).data('tech'));

	'use strict';
	
	if($(this).hasClass('selected')){
		$(this).removeClass('selected');

	} else {
		$(".images > input").removeClass('selected');
		$(this).addClass('selected');
	}
});