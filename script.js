document.addEventListener('DOMContentLoaded', function() {
    // 1. Smooth Scroll
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

    // 2. Nav Active State saat Scroll
    const sections = document.querySelectorAll('section, header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            // Menggunakan section.offsetTop untuk menemukan posisi awal setiap bagian
            const sectionTop = section.offsetTop;
            
            // Set offset (150px) agar link aktif sedikit sebelum mencapai bagian paling atas
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            // Menambahkan kelas 'active' jika href link cocok dengan ID bagian saat ini
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
    
    // **Tambahkan style 'active' di CSS untuk melihat efeknya!**
    // Contoh di CSS:
    // .nav-links a.active { color: var(--color-primary); }
});
