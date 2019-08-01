//var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//		var element_desktop = document.getElementById('desktop');
//var element_Mobile = document.getElementById('mobile');
//		if (isMobile) {
//  			document.getElementById('mobile').style.display = "block";
//            element_desktop.style.display = "none";
//		} else {
//            	element_Mobile.style.display = "none";
//            element_desktop.style.display = "block";
//		}

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Aug 30, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

//      document.getElementById('days').innerText = Math.floor(distance / (day)),
           document.getElementById('days').innerText = Math.floor(distance / (day)),
//        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
//        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
//        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second),
          document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('ul').style.display = "none";
          document.getElementById('ul_ele').style.display = "block";
      }

    }, second)

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "18%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function workshop(){
    document.getElementById("work").style.display = "block";
}

function technical(){
    document.getElementById("work1").style.display = "block";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function workshop(){
    document.getElementById("workshops_div").style.display = "block";
}


function technical(){
    document.getElementById("technical_div").style.display = "block";
}


function non_technical(){
    document.getElementById("non-technical").style.display = "block";
}


function paper_presentation(){
    document.getElementById("paper-presentation").style.display = "block";
}

// Step 3 - Instilize the plugin by #id selector
VANTA.BIRDS({
  el: "#vantajs",
    quantity: 0.00,

})

VANTA.BIRDS('#vantajs')