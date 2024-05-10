document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
            const sideImages = document.querySelectorAll('.header-image img');
            sideImages.forEach(img => {
                setTimeout(() => img.style.opacity = 1, 100);
        });
    });
});