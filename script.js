// Ambil semua elemen dengan class 'section'
const sections = document.querySelectorAll('.section');

// Buat observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Jika elemen masuk ke dalam viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Akan hilang saat keluar dari viewport
    }
  });
}, {
  threshold: 0.1 // 10% dari elemen terlihat = trigger
});

// Observasi setiap section
sections.forEach(section => {
  observer.observe(section);
});
