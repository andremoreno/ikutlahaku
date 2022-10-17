/* use jquery 1.12.4 */
//= require jquery.min.js
//= require bibleref.js
//= require jquery.stayInWebApp.js
//= require pace.js
//= require jquery.lazyloadxt.js
//= require jquery.lazyloadxt.widget.js

/*(function(document) {
	var toggle = document.querySelector('.sidebar-toggle');
	var sidebar = document.querySelector('#sidebar');
	var checkbox = document.querySelector('#sidebar-checkbox');

	document.addEventListener('click', function(e) {
		var target = e.target;
		
		if (!checkbox.checked || sidebar.contains(target) || (target === checkbox || target === toggle)) return;
		checkbox.checked = false;
	} false);
})(document);*/

(function(document) {
	var toggle = document.querySelector('.sidebar-toggle');
	var sidebar = document.querySelector('#sidebar');
	var checkbox = document.querySelector('#sidebar-checkbox');

	function toggleSidebar(e) {
		var target = e.target;
		if (!checkbox.checked || sidebar.contains(target) || (target === checkbox || target === toggle)) return;
		checkbox.checked = false;
	}

	document.addEventListener('click', toggleSidebar, false);
	document.addEventListener('touchstart', toggleSidebar, false);
})(document);


$(document).ready(function() {
	//Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.iatop').fadeIn();
		} else {
			$('.iatop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.iatop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});


jQuery(document).ready(function($) {
    $('a').not('[href*="mailto:"]').each(function () {
		var isInternalLink = new RegExp('/' + window.location.host + '/');
		if ( ! isInternalLink.test(this.href) ) {
			$(this).attr('target', '_blank');
		}
	});
});

