// Toggle menu mobile
function toggleMenu() {
  const navbar = document.querySelector(".dropdown");
  const isOpen = navbar.style.transform === "translateY(0px)";
  navbar.style.transform = isOpen ? "translateY(-500px)" : "translateY(0px)";

  // Tutup semua dropdown-content saat buka menu
  if (!isOpen) {
    document.querySelectorAll('.dropdown-content').forEach(d => d.style.display = 'none');
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

// Toggle dropdown-content
document.querySelectorAll('.link.has-dropdown > a').forEach(el=>{
  el.addEventListener('click', e=>{
    e.preventDefault();
    const dropdown = el.nextElementSibling;

    // kalau klik link yang sama, toggle (buka/tutup)
    if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
    } else {
      // tutup semua dropdown lain
      document.querySelectorAll('.dropdown-content').forEach(d=> d.style.display='none');
      dropdown.style.display = 'block';
    }
  });
});

// Tutup menu kalau klik di luar
document.addEventListener('click', e => {
  const menu = document.querySelector(".dropdown");
  const hamburg = document.querySelector(".hamburg");
  if (!menu.contains(e.target) && !hamburg.contains(e.target)) {
    menu.style.transform = "translateY(-500px)";
    // juga tutup semua dropdown-content
    document.querySelectorAll('.dropdown-content').forEach(d=> d.style.display='none');
  }
});

document.getElementById("refreshProject").addEventListener("click", function(e){
    e.preventDefault(); // cegah scroll ke atas karena #
    location.reload();
  });

const buttons = document.getElementsByClassName("refresh");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e){
    e.preventDefault(); 
    location.reload();
  });
}

function toggleLevelDropdown() {
  var options = document.getElementById("levelOptions");
  options.style.display = (options.style.display === "block") ? "none" : "block";
}

// Optional: klik di luar untuk tutup dropdown
document.addEventListener("click", function(e) {
  var dropdown = document.querySelector(".dropdown-level");
  if (!dropdown.contains(e.target)) {
    document.getElementById("levelOptions").style.display = "none";
  }
});