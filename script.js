document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scroll untuk Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Active State di Navigasi saat Scroll
    const sections = document.querySelectorAll('section, header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Menggunakan tinggi 150px untuk offset agar link aktif sebelum mencapai bagian paling atas
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // Tambahkan style untuk active state di CSS
    // .nav-links a.active { color: #333; background-color: #ffd300; border-radius: 4px; padding: 0 5px; }
    // atau gaya lain yang Anda inginkan
});
