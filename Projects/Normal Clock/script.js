function setClock() {
    var hourHand = document.getElementById("hourHand");
    var minuteHand = document.getElementById("minuteHand");
    var secondHand = document.getElementById("secondHand");
  
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    var hourRotation = hours * 30 + minutes * 0.5; // Each hour represents 30 degrees, each minute represents 0.5 degrees.
    var minuteRotation = minutes * 6 + seconds * 0.1; // Each minute represents 6 degrees, each second represents 0.1 degrees.
    var secondRotation = seconds * 6; // Each second represents 6 degrees.
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  setInterval(setClock, 1000); // Update the clock every second