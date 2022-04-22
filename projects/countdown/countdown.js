var countDownDate = new Date("June 13, 2022 12:25:00").getTime();
var countdownfunction = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("timer").innerHTML = days + "d • " + hours + "h • " + minutes + "m • " + seconds + "s";
   
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("timer").innerHTML = "Get your shades on 😎";
  }
}, 1000);