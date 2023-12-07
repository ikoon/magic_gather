
var $header_top = $('.header-top');
var $nav = $('nav');

// toggle menu 
$header_top.find('a').on('click', function(event) {
	event.stopPropagation();
	$(this).parent().toggleClass('open-menu');
	$('.hide').toggleClass('open');
});

$(document).on('click', function() {
    $('.hide').removeClass('open');
	$('.hide').css('right','-43.055%;')
});
// $(".toggle-menu").click(function() {
// 	$(".hide,.page_cover,html").addClass("open");
// 	window.location.hash = "#open";
//   });

window.onhashchange = function() {
	if (location.hash != "#open") {
	  $(".main-menu,.page_cover,html").removeClass("open");
	}
};



//swiper
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		721: {
			slidesPerView: 3,
			spaceBetween: 46,
		},
	}

});


$(function () {

	// main full page setting
    $('#mainFullpage').fullpage({
        licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 1000,
        fitToSection: true,
        loopHorizontal:false,
        anchors: ['download', 'infomation', 'how-to-play'],
        menu: '#menu',
        afterRender: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        afterResize: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        onLeave: function(origin, destination, direction){
        if(direction == 'down'){
            var y = $(origin.item).find('.fp-bg').attr('data-offy') || 0;
            $(origin.item).find('.fp-bg').css('transform','translateY('+y+'px)');
        } else {
            $(destination.item).find('.fp-bg').css('transform','translateY(0px)');
        }
        },
    });

	// store full page setting
    $('#storeFullpage').fullpage({
        licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 1000,
        fitToSection: true,
        loopHorizontal:false,
        anchors: ['lineup', 'store', ''],
        menu: '#menu',
        afterRender: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        afterResize: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        onLeave: function(origin, destination, direction){
        if(direction == 'down'){
            var y = $(origin.item).find('.fp-bg').attr('data-offy') || 0;
            $(origin.item).find('.fp-bg').css('transform','translateY('+y+'px)');
        } else {
            $(destination.item).find('.fp-bg').css('transform','translateY(0px)');
        }
        },
    });

	// promotion full page setting
    $('#promotionFullpage').fullpage({
        licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
        scrollingSpeed: 1000,
        fitToSection: true,
        loopHorizontal:false,
        anchors: ['promotion', 'welcome-promotion', ''],
        menu: '#menu',
        afterRender: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        afterResize: function () {
        $('.fp-bg').each(function (index,item) {
            $(item).attr('data-offy',$(item).height()*0.6);
            $(item).attr('data-offx',$(item).width()*0.6);
        })
        },
        onLeave: function(origin, destination, direction){
        if(direction == 'down'){
            var y = $(origin.item).find('.fp-bg').attr('data-offy') || 0;
            $(origin.item).find('.fp-bg').css('transform','translateY('+y+'px)');
        } else {
            $(destination.item).find('.fp-bg').css('transform','translateY(0px)');
        }
        },
    });

	// cf section 탭 - 클릭시
	$('.tab_mv > li').on('click', function(){
		var index = $(this).index();
		$('.tab_mv > li').removeClass('on');
		$(this).addClass('on');
		$('.con_mv > li').removeClass('on');
		$('.con_mv > li').eq(index).addClass('on');

		// 영상 계속재생 방지
		// var mvSrc = $(this).data('src');
	   	// if(mvSrc != ''){
	    //     $('.con_mv iframe').attr('src', mvSrc);
	    // } else {
	    //     $('.con_mv iframe').attr('src', '');
	    // }
	});

	// 팝업 열기
	$(document).on("click", ".btn-sns", function (e){
		var target = $(this).attr("href");
		$(target).addClass("show");
	});
	// 팝업닫기 클릭 시 
	$(document).on("click", ".btn-close", function (e){
		var LayerPopup = $(".popup-wrap");
		LayerPopup.removeClass("show");
	});
	
	// 외부영역 클릭 시 팝업 닫기
	$(document).mouseup(function (e){
		var LayerPopup = $(".popup-wrap");
		if(LayerPopup.has(e.target).length === 0){
			LayerPopup.removeClass("show");
		}
	});
	
});