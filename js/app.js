document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle menu saat tombol diklik
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // cegah event bubbling ke document
    mobileMenu.classList.toggle('hidden');
  });

  // Tutup menu jika klik di luar menu dan tombol
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden')) {
      // cek apakah klik bukan di menu & bukan di tombol
      if (!mobileMenu.contains(e.target) && !btn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});
