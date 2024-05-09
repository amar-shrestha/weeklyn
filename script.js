document.addEventListener("DOMContentLoaded", function() {
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    // Initially, only the first testimonial is visible
    testimonials.forEach((testimonial, index) => {
        testimonial.style.opacity = (index === 0) ? '1' : '0';
    });

    setInterval(() => {
        // Fade out current testimonial
        testimonials[currentTestimonial].style.opacity = 0;

        // Determine the next testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;

        // Delay to ensure the fade out completes before starting to fade in the next one
        setTimeout(() => {
            testimonials[currentTestimonial].style.opacity = 1;
        }, 1000); // Match the transition time
    }, 5000); // Change every 5 seconds
});
