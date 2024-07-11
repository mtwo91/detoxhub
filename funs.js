let h1Texts = ["Wakeup", "Push", "Powerup", "Balance", "Recovery"];
let h3Texts = ["Khởi động ngày mới!", "Làm mới cơ thể!", "Tái tạo năng lượng!", "Thư giãn cân bằng!", "Phục hồi thể chất!"]
let styleMinute = [
  "none",
  "rotate10h 2s linear forwards",
  "rotate2h 2s linear forwards",
  "rotate4h 2s linear forwards",
  "rotate6h 2s linear forwards"
]
let styleLeftMinute = [
  "leftrotate10h 2s linear forwards",
  "leftrotate2h 2s linear forwards",
  "leftrotate4h 2s linear forwards",
  "leftrotate6h 2s linear forwards",
  "none",
]
let styleHour = [
  "none",
  "halfround10h 2s linear forwards",
  "halfround2h 2s linear forwards",
  "halfround4h 2s linear forwards",
  "halfround6h 2s linear forwards"
]
let styleLeftHour = [
  "lefthalfround10h 2s linear forwards",
  "lefthalfround2h 2s linear forwards",
  "lefthalfround4h 2s linear forwards",
  "lefthalfround6h 2s linear forwards",
  "none",
]
let logoColors = [
  "var(--wakeup-background)",
  "var(--push-background)",
  "var(--powerup-background)",
  "var(--balance-background)",
  "var(--recovery-background)"
]; 
let keyframes = ["wave-wakeup-effect", "wave-push-effect", "wave-powerup-effect", "wave-balance-effect", "wave-recovery-effect"]; // Add your keyframes here

// GSAP animation.......
gsap.from(".fruit-image ", { y: "-100vh", delay: 0.5 });
gsap.to(".fruit-image img", {
  x: "random(-20, 20)",
  y: "random(-20, 20)",
  zIndex: 22,
  duration: 2,
  ease: "none",
  yoyo: true,
  repeat: -1
});

// get the elements
const waveEffect = document.querySelector(".wave");
const sections = document.querySelectorAll(".section");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const caneLabels = document.querySelector(".cane-labels");
const sectionContainer = document.querySelector(".section-container");
const lineMinute = document.querySelector(".line-minute")
const lineHour = document.querySelector(".line-hour")
// set index and current position
let index = 0;
let currentIndex = 0;
let currentPosition = 0;

// Prev + Next
nextButton.addEventListener("click", () => {
  if (currentPosition > -400) {
    currentPosition -= 100;
  } else {
    currentPosition = 0;
  }

  // update the left position of the cane-labels
  caneLabels.style.left = `${currentPosition}%`;
  sectionContainer.style.left = `${currentPosition}%`;

  // loop back to the start
  currentIndex = (currentIndex + 1) % h1Texts.length;

  // update the h1 text
  document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
  document.querySelector(".title-detox").innerHTML = h3Texts[currentIndex];

  // gasp animation next
  gsap.to(".logo-colors", {
    opacity: 1,
    duration: 1,
    color: logoColors[currentIndex]
  });
  gsap.from(".h1", { y: "20%", x: "0%", opacity: 0, duration: 0.5 });
  gsap.from(".fruit-image", { y: "-100vh", delay: 0.4, duration: 0.4 });

  // enable the prevButton if it's not the first section
  prevButton.style.display = currentIndex > 0 ? "block" : "none";

  // button colors and animations
  nextButton.style.color = logoColors[currentIndex + 1] || logoColors[0];
  prevButton.style.color = logoColors[currentIndex - 1] || logoColors[logoColors.length - 1];
  nextButton.style.animationName = keyframes[currentIndex + 1] || keyframes[0];
  prevButton.style.animationName = keyframes[currentIndex - 1] || keyframes[keyframes.length - 1];

  // clock time
  lineMinute.style.animation = styleMinute[currentIndex];
  lineHour.style.animation = styleHour[currentIndex];
});

// add event listeners to the buttons
prevButton.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += 100;
  } else {
    currentPosition = -400;
  }

  // update the left position cane-labels
  caneLabels.style.left = `${currentPosition}%`;
  sectionContainer.style.left = `${currentPosition}%`;
  sectionContainer.style.transition = "all 0.5s ease-in-out";

  // decrement index and currentIndex
  currentIndex = (currentIndex - 1 + h1Texts.length) % h1Texts.length;

  document.querySelector(".h1").innerHTML = h1Texts[currentIndex];
  document.querySelector(".title-detox").innerHTML = h3Texts[currentIndex];

  // gasp animation for previous section
  gsap.to(".logo-colors", { color: logoColors[currentIndex], duration: 1 });
  gsap.from(".h1", { y: "20%", x: "0%", opacity: 0, duration: 0.5 });
  gsap.from(".fruit-image", { y: "100vh", delay: 0.5 });

  // enable the nextButton if it was disabled
  nextButton.style.display = "block";

  // button colors and animations
  nextButton.style.color = logoColors[currentIndex + 1] || logoColors[0];
  prevButton.style.color = logoColors[currentIndex - 1] || logoColors[logoColors.length - 1];
  nextButton.style.animationName = keyframes[currentIndex + 1] || keyframes[0];
  prevButton.style.animationName = keyframes[currentIndex - 1] || keyframes[keyframes.length - 1];

  // left clock time
  lineMinute.style.animation = styleLeftMinute[currentIndex];
  lineHour.style.animation = styleLeftHour[currentIndex];
});

// Map area
function showMap(mapId) {
  document.getElementById('map1-iframe').style.display = 'none';
  document.getElementById('map2-iframe').style.display = 'none';
  document.getElementById(mapId).style.display = 'block';
}

// Footer
for (var i = 0; i < 128; i++) {
  var bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.style = `--size:${2 + Math.random() * 4}rem; --distance:${6 + Math.random() * 4}rem; --position:${-5 + Math.random() * 110}%; --time:${2 + Math.random() * 2}s; --delay:${-1 * (2 + Math.random() * 2)}s;`;
  document.querySelector('.bubbles').appendChild(bubble);
}

// Scroll smooth
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Shipping popup
document.getElementById('shipping').onclick = function() {
  var shippingpopup = document.getElementById('shipping-popup');
  if (shippingpopup.style.display === 'none' || shippingpopup.style.display === '') {
      shippingpopup.style.display = 'block';
  } else {
      shippingpopup.style.display = 'none';
  }
};

// Product
let currentIndexP = 0;

function slide(direction) {
    const slider = document.querySelector('.slider-container');
    const products = document.querySelectorAll('.product');
    const totalProducts = products.length;
    const visibleProducts = window.innerWidth < 430 ? 1 : 3;

    currentIndexP += direction;

    if (currentIndexP < 0) {
        currentIndexP = totalProducts - visibleProducts;
    } else if (currentIndexP >= totalProducts) {
        currentIndexP = 0;
    }

    const offset = -currentIndexP * (100 / visibleProducts);
    slider.style.transform = `translateX(${offset}%)`;
}

function handleResize() {
    const slider = document.querySelector('.slider-container');
    const visibleProducts = window.innerWidth < 430 ? 1 : 3;
    const offset = -currentIndexP * (100 / visibleProducts);
    slider.style.transform = `translateX(${offset}%)`;
}

// Initialize the slider
slide(0);

// Listen for resize events
window.addEventListener('resize', handleResize);

// Add event listeners for dragging functionality
let startX = 0;
let endX = 0;
let isDragging = false;

function handleMouseDown(event) {
    startX = event.clientX;
    isDragging = true;
}

function handleMouseMove(event) {
    if (isDragging) {
        endX = event.clientX;
    }
}

function handleMouseUp() {
    if (isDragging) {
        const direction = endX - startX > 0 ? -1 : 1;
        slide(direction);
        isDragging = false;
    }
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
}

function handleTouchMove(event) {
    if (isDragging) {
        endX = event.touches[0].clientX;
    }
}

function handleTouchEnd() {
    if (isDragging) {
        const direction = endX - startX > 0 ? -1 : 1;
        slide(direction);
        isDragging = false;
    }
}

const slider = document.querySelector('.slider-container');
slider.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);

slider.addEventListener('touchstart', handleTouchStart);
slider.addEventListener('touchmove', handleTouchMove);
slider.addEventListener('touchend', handleTouchEnd);

// Popup
jQuery(document).ready(function($){
	//open popup
	$('.hebanube-click').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking other
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

// scroll down hind the header
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = `-${headerHeight}px`;
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

// Time - Countdown
var clock = new Vue({
  el: '#clock',
  data: {
      time: '',
      date: ''
  }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
  var cd = new Date();
  clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
  clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
      zero += '0';
  }
  return (zero + num).slice(-digit);
}

function getNextDailyTime(targetHour, targetMinute) {
  // Lấy thời gian hiện tại
  var now = new Date();
  
  // Tạo một đối tượng Date cho thời điểm hẹn hôm nay
  var nextTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, 0, 0);
  
  // Nếu thời gian hẹn hôm nay đã qua, đặt thời gian hẹn là ngày mai
  if (now > nextTime) {
      nextTime.setDate(nextTime.getDate() + 1);
  }

  return nextTime.getTime();
}

// Sử dụng hàm với giờ và phút bạn muốn
var countDownDates = [
  getNextDailyTime(7, 0),
  getNextDailyTime(10, 0),
  getNextDailyTime(14, 0),
  getNextDailyTime(16, 0),
  getNextDailyTime(18, 0)
];
var eventElements = [
  document.getElementById("7h"),
  document.getElementById("10h"),
  document.getElementById("14h"),
  document.getElementById("16h"),
  document.getElementById("18h")
];
var eventTitle = [
  document.getElementById("title-1"),
  document.getElementById("title-2"),
  document.getElementById("title-3"),
  document.getElementById("title-4"),
  document.getElementById("title-5")
];

// Function to update the countdown
function updateCountdown() {
  var now = new Date().getTime();
  var closestCountdownIndex = -1;
  var closestDistance = Infinity;

  // Find the closest countdown date
  for (var i = 0; i < countDownDates.length; i++) {
      var distance = countDownDates[i] - now;
      if (distance > 0 && distance < closestDistance) {
          closestDistance = distance;
          closestCountdownIndex = i;
      }
  }

  // If no valid countdown is found, all dates have passed
  if (closestCountdownIndex === -1) {
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      document.getElementById("seconds").innerHTML = "00";
      return;
  }

  // Calculate time remaining
  var distance = closestDistance;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

  // Show the current event and hide others
  for (var i = 0; i < eventElements.length; i++) {
    if (i === closestCountdownIndex) {
        eventElements[i].style.display = "block";
        eventTitle[i].style.display = "block";
    } else {
        eventElements[i].style.display = "none";
        eventTitle[i].style.display = "none";
    }
}    
  // If the countdown is over, reset the interval
  if (distance < 0) {
      clearInterval(x);
  }
}

// Update the countdown every second
var x = setInterval(updateCountdown, 1000);