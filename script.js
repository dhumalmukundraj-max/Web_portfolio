// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            // Animate skill bars when their card reveals
            e.target.querySelectorAll?.('.skill-fill').forEach(f => {
                f.style.width = f.dataset.pct + '%';
            });
            io.unobserve(e.target);
        }
    });
}, {
    threshold: 0.12
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));