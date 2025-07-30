const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', (e) => {
  e.stopPropagation(); // Supaya klik di tombol gak langsung trigger document click
  menu.classList.toggle('hidden');
});

// Klik di mana saja
document.addEventListener('click', (e) => {
  // Kalau menu lagi terbuka dan kliknya bukan di menu atau tombol
  if (!menu.classList.contains('hidden') && !menu.contains(e.target) && e.target !== btn) {
    menu.classList.add('hidden');
  }
});
