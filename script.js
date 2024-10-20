document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function toggleMenu() {
    const modal = document.getElementById('navModal');
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}


window.onclick = function (event) {
    const modal = document.getElementById('navModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



const reviewsWrapper = document.querySelector('.reviews-wrapper');
const reviewCards = document.querySelectorAll('.review-card');
let currentIndex = 0;

function updateSliderPosition() {
    reviewsWrapper.style.transform = `translateX(-${currentIndex * 35}%)`;
}

document.querySelector('#next-button').addEventListener('click', () => {
    if (currentIndex < reviewCards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSliderPosition();
});

document.querySelector('#prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = reviewCards.length - 1; 
    }
    updateSliderPosition();
});

const advantagesWrapper = document.querySelector('.advantages-wrapper');
const advantageCards = document.querySelectorAll('.advantage');
let currentBenefitIndex = 0;

function updateBenefitsSlider() {
    advantagesWrapper.style.transform = `translateX(-${currentBenefitIndex * 100}%)`;
}

document.querySelector('#next-benefit').addEventListener('click', () => {
    if (currentBenefitIndex < advantageCards.length - 1) {
        currentBenefitIndex++;
    } else {
        currentBenefitIndex = 0; 
    }
    updateBenefitsSlider();
});

document.querySelector('#prev-benefit').addEventListener('click', () => {
    if (currentBenefitIndex > 0) {
        currentBenefitIndex--;
    } else {
        currentBenefitIndex = advantageCards.length - 1;
    }
    updateBenefitsSlider();
});
