$(document).ready( function() {
	$("a.dd-toggle").click( function(e) { 
		
		e.preventDefault();
		
		if ( $(this).next("h5").hasClass("menu-hidden") ) {
			$(this).next("h5").removeClass("menu-hidden").addClass("menu-shown");
		}
		else {
			$(this).removeClass("menu-shown").addClass("menu-hidden");
		}		
		
		if ( $(this).next("ul").hasClass("dd-shown") ) {
			$(this).next("ul").removeClass("dd-shown").addClass("dd-hidden");
		} 
		else {
			$(this).next("ul").removeClass("dd-hidden").addClass("dd-shown");
		}
	});


});