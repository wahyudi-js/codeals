var slideIndex = 0;
	showSlides();

function showSlides() {
	var i;
	var slides = 
		document.getElementsByClassName
			("mySlides");
	var dots = 
		document.getElementsByClassName
			("dot");
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
				}	
		
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		
		for (i = 0; i < dots.length; i++) {
			dots[i].className = 
				dots[i].className.replace 
				("active", "");
			}
			
		slides[slideIndex-1].style.display = 
			"block";
		dots[slideIndex-1].className += 
			" active";
	setTimeout(showSlides, 2000);
	}

/* js slideshow dengan tombol panah
var slideIndex = 1;
	showSlides(slideIndex);

function plusSlides (n) {
	showSlides(slideIndex += n);
}

function currentSlide (n) {
	showSlides(slideIndex = n);
}

function showSlides (n) {
	var i;
	var slides =
document.getElementsByClassName
("mySlides");
	var dots =
document.getElementsByClassName("dot");
	if (n > slides.length)
{slideIndex = 1}
	if (n < 1) {slideIndex = 
	slides.length}
	for (i = 0; i < slides.length; 
	i++){
	slides [i].style.display = 
	"none";
	}
	for (i = 0; i < dots.length; 
	i++) {
			dots[i].className = 
			dots[i].className.replace
			("active", "");
			}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
*/

function openCity(evt, cityName) {
var i, tabcontent, tablinks;
  tabcontent = 
 document.getElementsByClassName
 ("tabcontent");
for (i = 0; i < 
 tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
  }
	tablinks =  document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++){
  tablinks[i].className =
    tablinks[i].className.replace
  ("active", "");
  }
  document.getElementById(cityName).style.
   display = "block";
evt.currentTarget.className += "active";
}

function openNav () {
document.getElementById("mySidenav").style.display = "block";
}

	function myFunction() {
	alert("selamat datang");
	}
	
//clock
function displayCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let amOrPm = hours < 12 ? "AM" : "PM";

  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;

  document.getElementById("clock").innerText = timeString;
  let timer = setTimeout(displayCurrentTime, 1000);
}

function addZero(component) {
  return component < 10 ? "0" + component : component;
}

displayCurrentTime();


/*	
var elem =
	document.documentElement ;
	
	function openFullscreen() {
		if (elem.requestFullscreen) {
			elem.requestFullscreen() ;
			} else if
		(elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen ();
		} else if
		(elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen ();
		} else if
		(elem.msRequestFullscreen) {
		
		elem = 
		window.top.document.body;
			elem.msRequestFullscreen();
		}
	}
	
	function closeFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if
	(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
			} else if 
	(document.webkitExitFullscreen) {
		document.webkitExitFullscreen() ;
		} else if
	(document.msExitFullscreen) {
	winindow.top.document.msExitFullscreen();
	}
}

var output =
	document.getElementById("body");
	document.addEvenListener("fullscreenchange"; 
	function () {
		output.innerHTML = " "; } );
	*/