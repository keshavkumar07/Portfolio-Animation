// Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  // Show the welcome note animation first, then show the content after 3 seconds
  setTimeout(function () {
    document.body.classList.add("loaded"); // Hide welcome note and show the content
  }, 3000); // 3 seconds delay for the welcome note animation

  setTimeout(function () {
    let hideWelcome = document.querySelector(".welcome-note");
    hideWelcome.classList.remove("welcome-note");
    hideWelcome.classList.add("hideWelcome-note");
  }, 4500);

  setTimeout(function () {
    let hidecontent = document.querySelector(".hide-content");
    hidecontent.classList.remove("hide-content");
    hidecontent.classList.add("show-content");
  }, 4500);
});

// Contact Section Logic
document.querySelector(".contact-details").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the feedback from the textarea
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;

  // Display a thank-you message
  document.getElementById("feedback-message").textContent =
    "Thank you for your feedback!";

  // Clear the textarea
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("feedback").value = "";
});

// Section Animation

// Home Section Animation
let homeLink = document.querySelector(".home-link");
let homePart1 = document.querySelector("#home-part1");
let homePart2 = document.querySelector("#home-part2");
homeLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    homePart1.style.animation = "section-animate 1.5s ease-in-out forwards";
    homePart2.style.animation = "section-animate 1.5s ease-in-out forwards";
    i++;
  }

  setTimeout(function () {
    homePart1.style.animation = "none";
    homePart2.style.animation = "none";
  }, 1500);
});

// About Section Annimation
let aboutLink = document.querySelector(".about-link");
let aboutPart1 = document.querySelector("#about-heading");
let aboutPart2 = document.querySelector("#about-details");
aboutLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    aboutPart1.style.animation = "section-animate 1.5s ease-in-out forwards";
    aboutPart2.style.animation = "section-animate 1.5s ease-in-out forwards";
    i++;
  }

  setTimeout(function () {
    aboutPart1.style.animation = "none";
    aboutPart2.style.animation = "none";
  }, 1500);
});

// Education Section Animation
let educationLink = document.querySelector(".education-link");
let educationPart1 = document.querySelector("#education-heading");
let educationPart2 = document.querySelector("#education-details");
educationLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    educationPart1.style.animation =
      "section-animate 1.5s ease-in-out forwards";
    educationPart2.style.animation =
      "section-animate 1.5s ease-in-out forwards";
    i++;
  }
  setTimeout(function () {
    educationPart1.style.animation = "none";
    educationPart2.style.animation = "none";
  }, 1500);
});

// Skills Section Animation
let skillsLink = document.querySelector(".skills-link");
let skillsPart1 = document.querySelector(".skills-heading");
let skillsPart2 = document.querySelector(".skills-content");
skillsLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    skillsPart1.style.animation = "section-animate 1.5s ease-in-out forwards";
    skillsPart2.style.animation = "section-animate 1.5s ease-in-out forwards";
    i++;
  }
  setTimeout(function () {
    skillsPart1.style.animation = "none";
    skillsPart2.style.animation = "none";
  }, 1500);
});

// Contact Section Animation
let contactLink = document.querySelector(".contact-link");
let contactPart1 = document.querySelector(".contact-heading");
let contactPart2 = document.querySelector(".contact-details");
contactLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    contactPart1.style.animation = "section-animate 1.5s ease-in-out forwards";
    contactPart2.style.animation = "section-animate 1.5s ease-in-out forwards";
    i++;
  }
  setTimeout(function () {
    contactPart1.style.animation = "none";
    contactPart2.style.animation = "none";
  }, 1500);
});

// Contact Me link
let contactMeLink = document.querySelector(".contactme-btn");
contactPart1 = document.querySelector(".contact-heading");
contactPart2 = document.querySelector(".contact-details");
contactMeLink.addEventListener("click", () => {
  let i = 1;
  while (i == 1) {
    contactPart1.style.animation = "section-animate 1.5s ease-in-out forwards";
    contactPart2.style.animation = "section-animate 1.5s ease-in-out forwards";
    i++;
  }
  setTimeout(function () {
    contactPart1.style.animation = "none";
    contactPart2.style.animation = "none";
  }, 1500);
});