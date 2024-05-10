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
});
