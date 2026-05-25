document.addEventListener('DOMContentLoaded', () => {

    // FAQ
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('open');
        });
    });

    // Burger
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    // Закриття при кліку на посилання
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
});