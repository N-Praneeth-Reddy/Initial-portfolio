document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".navs");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

function toggleNav() {
  var navLinks = document.querySelector(".navs");
  navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
  const text = "HEY! I'M";
  const targetElement = document.getElementById("hey");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      targetElement.textContent += text[index];
      index++;
      setTimeout(typeWriter, 250); // Adjust speed by changing timeout (ms)
    }
  }

  // Clear the text and start the typing effect
  targetElement.textContent = "";
  typeWriter();
});



const jobTitles = ['Sofware Developer', 'Data Analyst', 'Machine Learning Engineer'];
let currentIndex = 0;

// Function to change the job title with a fade-in effect
function changeJobTitle() {
    const jobTitleElement = document.getElementById('job-title');
    jobTitleElement.style.opacity = 0;

    // Use setTimeout to change the job title after the opacity transition is complete
    setTimeout(function() {
        jobTitleElement.textContent = jobTitles[currentIndex];
        jobTitleElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % jobTitles.length; // Move to the next job title
    }, 500);
}

// Set an interval to change the job title every 3 seconds (adjust as needed)
setInterval(changeJobTitle, 3000);

setTimeout(changeJobTitle, 1000);

