document.addEventListener('DOMContentLoaded', function() {
    // Create the bar div
    var topBar = document.createElement('div');
    topBar.style.position = 'fixed';
    topBar.style.top = '1px';
    topBar.style.left = '0';
    topBar.style.width = '100%';
    topBar.style.height = '90px'; // Adjust height as needed
    topBar.style.backgroundColor = 'rgba(240, 240, 240, 0.9)'; // Set background with 0.5 opacity
    topBar.style.zIndex = '1000'; // Ensure it's above other content
    topBar.style.display = 'flex';
    topBar.style.alignItems = 'center';
    topBar.style.justifyContent = 'space-between'; // Distribute items evenly
    topBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Optional shadow for depth
    topBar.style.borderRadius = '10px'; // Add rounded corners

    // Create the scrolling text on the left
    var leftText = document.createElement('div');
    leftText.style.width = '40%'; // Allocate space for scrolling text
    leftText.style.overflow = 'hidden';
    leftText.style.whiteSpace = 'nowrap';
    leftText.style.textAlign = 'right'; // Right-align text on the left side

    var leftContent = document.createElement('p');
    leftContent.innerText = 'Exciting News: One More Store Opening Soon! Stay Tuned for Updates.';
    leftContent.style.fontFamily = '"Lato", sans-serif'; // Example font
    leftContent.style.color = '#5a3817'; // Example color
    leftContent.style.fontSize = '18px'; // Example size
    leftContent.style.margin = '0';
    leftContent.style.animation = 'scrollLeft 20s linear infinite';

    leftText.appendChild(leftContent);
    topBar.appendChild(leftText);

    // Create the logo link element
    var logoLink = document.createElement('a');
    logoLink.href = 'index.html'; // Adjust to point to your homepage URL
    logoLink.style.textDecoration = 'none'; // Remove underline from the link
    logoLink.style.flexGrow = '0'; // Prevent stretching

    // Create the logo image element
    var logoImage = document.createElement('img');
    logoImage.src = 'logo.png'; // Path to your logo image
    logoImage.alt = 'Weeklyn Dry Cleaning Logo';
    logoImage.style.height = '95px'; // Adjust based on your logo size
    logoImage.style.transition = 'transform 0.3s ease'; // Smooth transition for transform

    // Apply hover effect using JavaScript
    logoImage.onmouseover = function() {
        logoImage.style.transform = 'scale(1.1)'; // Scale up on hover
    };
    logoImage.onmouseout = function() {
        logoImage.style.transform = 'scale(1.0)'; // Scale back on mouse out
    };

    logoLink.appendChild(logoImage);
    topBar.appendChild(logoLink);

    // Create the scrolling text on the right
    var rightText = document.createElement('div');
    rightText.style.width = '40%'; // Allocate space for scrolling text
    rightText.style.overflow = 'hidden';
    rightText.style.whiteSpace = 'nowrap';
    rightText.style.textAlign = 'left'; // Left-align text on the right side

    var rightContent = document.createElement('p');
    rightContent.innerText = 'Exciting News: One More Store Opening Soon! Stay Tuned for Updates.';
    rightContent.style.fontFamily = '"lato", sans-serif'; // Example font
    rightContent.style.color = '#5a3817'; // Example color
    rightContent.style.fontSize = '18px'; // Example size
    rightContent.style.margin = '0';
    rightContent.style.animation = 'scrollRight 20s linear infinite';

    rightText.appendChild(rightContent);
    topBar.appendChild(rightText);

    // Append the bar to the body of the page, making it the first element
    document.body.insertBefore(topBar, document.body.firstChild);

    // Style for scrolling animation
    var styleSheet = document.createElement('style');
    styleSheet.innerText = `
        @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        @keyframes scrollRight {
            0% { transform: translateX(0); }
            100% { transform: translateX(100%); }
        }
    `;
    document.head.appendChild(styleSheet);
});





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
