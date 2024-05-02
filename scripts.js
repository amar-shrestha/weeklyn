// JavaScript for fading testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials[currentTestimonial].style.opacity = 0; // Fade out
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.opacity = 1; // Fade in
}, 3000);
