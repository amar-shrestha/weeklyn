document.addEventListener("DOMContentLoaded", function() {
    // Load the header content and re-trigger animations
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Reapply animations for dynamically loaded content
            document.querySelectorAll('.animated-entry').forEach(el => {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            });
            // Initialize the image cycling after loading the header
            initializeImageCycling();
        });

    // Load the navigation content and re-trigger animations
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            // Reapply animations for dynamically loaded content
            document.querySelectorAll('.animated-entry').forEach(el => {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            });
        });

    // Load the footer content and re-trigger animations
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            // Reapply animations for dynamically loaded content
            document.querySelectorAll('.animated-entry').forEach(el => {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            });
        });

    // Initialize FAQ toggle functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
});

function initializeImageCycling() {
    // Header image cycling functionality
    const images = document.querySelectorAll('.header-images img');
    let currentIndex = 0;

    function showNextImage() {
        console.log('Current Index:', currentIndex); // Debugging: Log current index
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        console.log('Next Index:', currentIndex); // Debugging: Log next index
        images[currentIndex].classList.add('active');
    }

    if (images.length > 0) {
        // Debugging: log the number of images found
        console.log(`Total images found: ${images.length}`);
        images.forEach((img, index) => console.log(`Image ${index + 1} src: ${img.src}`));
        
        setInterval(showNextImage, 10000); // Change image every 10 seconds
    } else {
        console.error('No images found in the .header-images container.');
    }
}
