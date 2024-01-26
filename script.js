// Form validation and submission alert
function validate() {
    var name = document.forms["myForm"]["Name"].value;
    var email = document.forms["myForm"]["Email"].value;
    var subject = document.forms["myForm"]["Subject"].value;
    var message = document.forms["myForm"]["Message"].value;
  
    // Check if any field is empty
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Check if email is valid using a regular expression
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    // Display a submission alert
    alert("Form submitted successfully!");
    return true;
  }

  // Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  for (var i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener("click", function(e) {
      e.preventDefault();
      
      var target = document.querySelector(this.getAttribute("href"));
      var targetOffset = target.offsetTop;
      var duration = 800; // Adjust scrolling duration here (in milliseconds)
      var startingY = window.pageYOffset;
      var diff = targetOffset - startingY;
      var start;
      
      window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var time = timestamp - start;
        var percentage = Math.min(time / duration, 1);
        window.scrollTo(0, startingY + diff * percentage);
        
        if (time < duration) {
          window.requestAnimationFrame(step);
        }
      });
    });
  }
});

// JavaScript for the hover effect
const eventCols = document.querySelectorAll('.event-col');

eventCols.forEach((eventCol) => {
  const eventImage = eventCol.querySelector('.event-image');

  eventCol.addEventListener('mouseover', () => {
    eventImage.style.opacity = '.5';
  });

  eventCol.addEventListener('mouseout', () => {
    eventImage.style.opacity = '0';
  });
});
  