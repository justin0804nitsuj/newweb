// script.js

// 選取選單容器
const menuContainer = document.querySelector('.menu-container');

// 監聽滾動事件，縮小選單
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        menuContainer.classList.add('scrolled');
    } else {
        menuContainer.classList.remove('scrolled');
    }
});

// 平滑滾動功能
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
