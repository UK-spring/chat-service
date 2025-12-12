// Simple script to handle any future interactivity
// Currently just logs that the page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    console.log('AWS S3 Explorer Loaded');

    // Smooth scroll for anchor links (already handled by CSS scroll-behavior, but good for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
