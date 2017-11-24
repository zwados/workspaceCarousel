$(function(){
	var carouselList = $("#carousel ul");
	setInterval(changeSlide, 6000);
  carouselList.css({marginLeft:-400});

	function changeSlide() {
		carouselList.animate({'marginLeft':-800}, 1000, moveFirstSlide);
	}
  
	function changeSlide2() {
		carouselList.animate({'marginLeft':0}, 1000, moveLastSlide);
	}

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:-400});
	}
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	}

	function nextSlide() {
		var next = $("#Next");
		$("#next").click(function(){
			console.log("clicked");
			changeSlide();
		})
	}
	function prevSlide() {
		var prev = $("#prev");
		$("#prev").click(function(){
			console.log("clicked");
			changeSlide2();
		})
	}
	nextSlide();
	prevSlide();
});