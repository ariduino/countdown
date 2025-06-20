// Set the date we're counting down to
var countDownDate = new Date("Jun 18, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  //   Console.log("Test");
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (seconds % 2 == 0) {
    document.getElementById("countdown").style.color = "yellow";
  }
  else {
    document.getElementById("countdown").style.color = "red";
  }
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE WORLD HAS AlREADY ENDED!!!";
  }
}, 1000);