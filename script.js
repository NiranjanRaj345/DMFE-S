document.addEventListener('DOMContentLoaded', function () {
    // Sticky navigation bar effect with combined logic for scroll and opacity
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.top-nav');
        const scrollPosition = window.pageYOffset;

        // Sticky navbar and background opacity adjustments
        navbar.classList.toggle('sticky', scrollPosition > 0);
        navbar.style.backgroundColor = `rgba(0, 0, 0, ${scrollPosition > 50 ? 0.8 : 1})`;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            targetElement && targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Ensure both elements exist before adding event listeners
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active'); // Toggle menu visibility
            this.classList.toggle('is-active'); // Animate the hamburger icon (optional)
        });
    } else {
        console.error('Hamburger menu or navigation menu not found in DOM.');
    }

    // Dropdown menu functionality for "Our Team"
    const ourTeamToggle = document.getElementById('ourTeamToggle');
    const ourTeamMenu = document.getElementById('ourTeamMenu');
    const arrow = ourTeamToggle?.querySelector('.arrow');

    if (ourTeamToggle && ourTeamMenu) {
        // Show dropdown on hover (desktop)
        ourTeamToggle.addEventListener('mouseover', () => {
            ourTeamMenu.classList.add('active');
            arrow.classList.add('active');
        });

        // Hide dropdown on mouseout (desktop)
        ourTeamToggle.addEventListener('mouseout', () => {
            ourTeamMenu.classList.remove('active');
            arrow.classList.remove('active');
        });

        // Toggle dropdown on click (mobile)
        ourTeamToggle.addEventListener('click', (event) => {
            event.preventDefault();
            ourTeamMenu.classList.toggle('active');
            arrow.classList.toggle('active');
        });

        // Close the dropdown if clicking outside of it
        document.addEventListener('click', (event) => {
            if (!ourTeamToggle.contains(event.target) && !ourTeamMenu.contains(event.target)) {
                ourTeamMenu.classList.remove('active');
                arrow.classList.remove('active');
            }
        });
    } else {
        console.warn('Our Team dropdown menu or toggle button not found in DOM.');
    }

    // General Dropdown functionality for other dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach(toggleButton => {
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggleButton.nextElementSibling;
            dropdownMenu && dropdownMenu.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        document.querySelectorAll('.dropdown-content.active').forEach(menu => {
            if (!menu.parentElement.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    });
});
