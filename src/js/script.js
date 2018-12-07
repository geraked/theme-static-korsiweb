//----------------------Number Convertor--------------------------
function ConvertNumberToPersion() {
	persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
	function traverse(el) {
		if (el.nodeType == 3) {
			var list = el.data.match(/[0-9]/g);
			if (list != null && list.length != 0) {
				for (var i = 0; i < list.length; i++)
					el.data = el.data.replace(list[i], persian[list[i]]);
			}
		}
		for (var i = 0; i < el.childNodes.length; i++) {
			traverse(el.childNodes[i]);
		}
	}
	traverse(document.body);
}
ConvertNumberToPersion();
//------------------------------------------------

$(document).ready(function(){
	
	//jQuery to collapse the navbar on scroll
	if ($(document).scrollTop() < 10) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
	$(window).scroll(function() {
		if ($(document).scrollTop() < 10) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});


	$("header").jParticle({
		background: null,
		particlesNumber: 100,
		color: "rgba(255, 255, 255, 0.1)",
		particle: {
			color: "rgba(255, 255, 255, 0.2)",
			minSize: 2,
			maxSize: 4,
			speed: 20
		}		
	});	
	
	
	//$('#carousel-comment').carousel();
    $('.btn-comment-slider').on('click', function () {
        if ($(this).attr('data-slide') == 'next') {
            $('#carousel-comment').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#carousel-comment').carousel('prev')
        }
    });	
	
	
});