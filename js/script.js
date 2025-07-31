// Toggle menu mobile
function toggleMenu() {
  const navbar = document.querySelector(".dropdown");
  if (navbar.style.transform === "translateY(0px)") {
    navbar.style.transform = "translateY(-500px)";
  } else {
    navbar.style.transform = "translateY(0px)";
  }
}

// Typewriter
const texts = ["DEVELOPER", "YOUTUBER", "CODER"];
let speed = 100, textIndex = 0, charIndex = 0;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex][charIndex++];
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}
function eraseText() {
  if (charIndex > 0) {
    textElement.innerHTML = texts[textIndex].substring(0, --charIndex);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex+1)%texts.length;
    setTimeout(typeWriter, 500);
  }
}
window.onload = typeWriter;

// Klik di luar hamburger → tutup hamburger
document.addEventListener('click', function(event) {
  const navbar = document.querySelector(".dropdown");
  const hamburg = document.querySelector(".hamburg");
  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickHamburg = hamburg.contains(event.target);

  // Kalau bukan klik di hamburger atau navbar, tutup
  if (!isClickInsideNavbar && !isClickHamburg) {
    navbar.style.transform = "translateY(-500px)";
  }
});
