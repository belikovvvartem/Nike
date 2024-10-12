document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

// Отримати кнопку
const scrollToTopButton = document.getElementById("scrollToTop");

// Показати кнопку при прокрутці
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Прокрутка до верху
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Анімація прокрутки
    });
};
