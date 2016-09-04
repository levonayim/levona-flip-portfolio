$(document).ready( function() {
	$("a.dd-toggle").click( function(e) { 
	
		e.preventDefault();
	
		
		if ( $(this).next("ul").hasClass("dd-shown") ) {
			$(this).next("ul").removeClass("dd-shown").addClass("dd-hidden");
			$(this).html('Menu').show().siblings('dd-shown').hide();
		} 

		else {
			$(this).next("ul").removeClass("dd-hidden").addClass("dd-shown");
			$(this).html('Close').show().siblings('dd-hidden').hide();
		}
	});



});